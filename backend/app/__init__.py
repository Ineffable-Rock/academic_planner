# app/__init__.py
from flask import Flask,jsonify
from flask_sqlalchemy import SQLAlchemy
import joblib
import pandas as pd
from flask import request
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

db = SQLAlchemy()

# --- Load AI Model and Course List ---
try:
    recommender_model = joblib.load('course_recommender.joblib')
    course_list = joblib.load('course_list.joblib')
    print("AI model loaded successfully.")
except FileNotFoundError:
    recommender_model = None
    course_list = []
    print("AI model files not found. Recommendation endpoint will be disabled.")

def create_app():
    app = Flask(__name__)
    CORS(app)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    @app.cli.command('init-db')
    def init_db_command():
        """Clears the existing data and creates new tables with sample data."""
        from . import models

        db.drop_all()
        db.create_all()

        # --- Create Sample Courses (Needed for the Graph) ---
        c1 = models.Course(course_code="CS101", course_name="Intro to Programming")
        c2 = models.Course(course_code="CS102", course_name="Data Structures")
        c3 = models.Course(course_code="CS201", course_name="Algorithms")
        c4 = models.Course(course_code="MA210", course_name="Discrete Mathematics")
        c5 = models.Course(course_code="CS301", course_name="Operating Systems")
        c6 = models.Course(course_code="DB101", course_name="Intro to Databases")
        c7 = models.Course(course_code="ML401", course_name="Machine Learning")

        c2.prerequisites.append(c1)
        c3.prerequisites.append(c2)
        c3.prerequisites.append(c4)
        c5.prerequisites.append(c2)
        c7.prerequisites.append(c3)
        c6.prerequisites.append(c2)

        # --- Create New Career Paths (For the Dashboard Cards) ---
        career_paths_data = [
            "Web Development", "Data Science", "Cybersecurity",
            "Cloud Computing", "App Development", "AI & Machine Learning",
            "Blockchain", "Game Development", "UI/UX Design", "DevOps"
        ]

        paths_to_add = []
        for career_name in career_paths_data:
            paths_to_add.append(models.CareerPath(name=career_name))

        db.session.add_all([c1, c2, c3, c4, c5, c6, c7])
        db.session.add_all(paths_to_add)
        db.session.commit()

        print(f"Initialized the database with {len(paths_to_add)} career paths and sample courses.")

    @app.route('/')
    def index():
        from .models import Course
        course_count = Course.query.count()
        return f"Hello from the Backend! There are {course_count} courses in the DB."

    @app.route('/api/courses', methods=['GET'])
    def get_courses():
        from .models import Course
        courses = Course.query.all()
        courses_list = [{'id': c.id, 'course_code': c.course_code, 'course_name': c.course_name, 'description': c.description} for c in courses]
        return jsonify(courses_list)

    @app.route('/api/prerequisites')
    def get_prerequisites():
        from .models import prerequisites
        edges_query = db.session.query(prerequisites).all()
        edges_list = [{'from': edge.prerequisite_id, 'to': edge.course_id} for edge in edges_query]
        return jsonify(edges_list)

    @app.route('/api/career-paths', methods=['GET'])
    def get_career_paths():
        from .models import CareerPath
        paths = CareerPath.query.all()
        path_list = [{'id': path.id, 'name': path.name} for path in paths]
        return jsonify(path_list)

    # ... (other routes) ...

    @app.route('/api/user/<string:user_id>/courses', methods=['GET'])
    def get_user_courses(user_id):
        from .models import UserCompletedCourse
        completed = UserCompletedCourse.query.filter_by(user_id=user_id).all()
        completed_ids = [c.course_id for c in completed]
        return jsonify({"completed_course_ids": completed_ids})

    @app.route('/api/user/<string:user_id>/courses', methods=['POST'])
    def add_user_course(user_id):
        from .models import UserCompletedCourse, Course
        data = request.get_json()
        course_code = data.get('course_code')
        course = Course.query.filter_by(course_code=course_code).first()
        if not course:
            return jsonify({"error": "Course not found"}), 404
        existing = UserCompletedCourse.query.filter_by(user_id=user_id, course_id=course.id).first()
        if existing:
            return jsonify({"message": "Course already marked as complete"}), 200
        new_completed = UserCompletedCourse(user_id=user_id, course_id=course.id)
        db.session.add(new_completed)
        db.session.commit()
        return jsonify({"message": f"Course {course_code} marked as complete for user {user_id}"}), 201

    # === NEW ROADMAP ENDPOINT (CORRECT LOCATION) ===
    @app.route('/api/career-paths/<int:path_id>/roadmap', methods=['GET'])
    def get_roadmap(path_id):
        from .models import CareerPath
        from .roadmaps_data import roadmaps  # ✅ Import the external roadmap data

        path = CareerPath.query.get(path_id)

        if not path:
            return jsonify({"error": "Career path not found"}), 404

        # Fetch roadmap for the given career path
        roadmap_data = roadmaps.get(path.name, [
            {
                "phase": "Phase 1: Coming Soon",
                "topics": ["Roadmap for this career path is under construction."]
            }
        ])

        return jsonify(roadmap_data)


    return app