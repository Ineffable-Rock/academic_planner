# app/__init__.py
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import joblib
import pandas as pd
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from .roadmaps_data import roadmaps

db = SQLAlchemy()

# --- Load AI Model and Course List ---
try:
    recommender_model = joblib.load('course_recommender.joblib')
    course_list = joblib.load('course_list.joblib')
    print("✅ AI model loaded successfully.")
except FileNotFoundError:
    recommender_model = None
    course_list = []
    print("⚠️ AI model files not found. Recommendation endpoint disabled.")

def create_app():
    app = Flask(__name__)
    CORS(app)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    # ================== DATABASE INITIALIZATION ==================
    @app.cli.command('init-db')
    def init_db_command():
        """Clears the DB and creates new tables with sample data."""
        from . import models
        
        db.drop_all()
        db.create_all()

        # --- Create Sample Courses ---
        c1 = models.Course(course_code="CS101", course_name="Intro to Programming")
        c2 = models.Course(course_code="CS102", course_name="Data Structures")
        c3 = models.Course(course_code="CS201", course_name="Algorithms")
        c4 = models.Course(course_code="MA210", course_name="Discrete Mathematics")
        c5 = models.Course(course_code="CS301", course_name="Operating Systems")
        c6 = models.Course(course_code="DB101", course_name="Intro to Databases")
        c7 = models.Course(course_code="ML401", course_name="Machine Learning")
        
        # --- Set Prerequisites ---
        c2.prerequisites.append(c1)
        c3.prerequisites.append(c2)
        c3.prerequisites.append(c4)
        c5.prerequisites.append(c2)
        c7.prerequisites.append(c3)
        c6.prerequisites.append(c2)
        db.session.add_all([c1, c2, c3, c4, c5, c6, c7])

        # --- Create Career Paths ---
        career_paths_data = [
            "Web Development", "Data Science", "Cybersecurity", "Cloud Computing",
            "App Development", "AI & Machine Learning", "Blockchain",
            "Game Development", "UI/UX Design", "DevOps"
        ]
        paths = {name: models.CareerPath(name=name) for name in career_paths_data}
        db.session.add_all(paths.values())

        # --- Link Courses to Career Paths ---
        if "Web Development" in paths:
            paths["Web Development"].required_courses.extend([c1, c2, c3, c6, c5])
        if "Data Science" in paths:
            paths["Data Science"].required_courses.extend([c1, c2, c3, c4, c7, c6])
        if "AI & Machine Learning" in paths:
            paths["AI & Machine Learning"].required_courses.extend([c1, c2, c3, c4, c7])
        
        db.session.commit()
        print(f"✅ Initialized DB with {len(paths)} career paths and sample courses.")

    # ================== API ROUTES ==================

    @app.route('/')
    def index():
        from .models import Course
        course_count = Course.query.count()
        return f"Hello from the Backend! There are {course_count} courses in the DB."

    # ---------- Courses ----------
    @app.route('/api/courses', methods=['GET'])
    def get_courses():
        from .models import Course, CareerPath
        career_path_id = request.args.get('career_path_id', type=int)
        
        if career_path_id:
            path = CareerPath.query.get(career_path_id)
            courses = path.required_courses if path else []
        else:
            courses = Course.query.all()
            
        courses_list = [
            {'id': c.id, 'course_code': c.course_code, 'course_name': c.course_name}
            for c in courses
        ]
        return jsonify(courses_list)

    # ---------- Prerequisites ----------
    @app.route('/api/prerequisites', methods=['GET'])
    def get_prerequisites():
        from .models import prerequisites, CareerPath
        career_path_id = request.args.get('career_path_id', type=int)
        
        edges_query = db.session.query(prerequisites).all()
        
        if career_path_id:
            path = CareerPath.query.get(career_path_id)
            if path:
                course_ids = {course.id for course in path.required_courses}
                filtered_edges = [
                    edge for edge in edges_query
                    if edge.prerequisite_id in course_ids and edge.course_id in course_ids
                ]
                edges_query = filtered_edges
            else:
                edges_query = []

        edges_list = [{'from': edge.prerequisite_id, 'to': edge.course_id} for edge in edges_query]
        return jsonify(edges_list)

    # ---------- Career Paths ----------
    @app.route('/api/career-paths', methods=['GET'])
    def get_career_paths():
        from .models import CareerPath
        paths = CareerPath.query.all()
        path_list = [{'id': path.id, 'name': path.name} for path in paths]
        return jsonify(path_list)

    # ---------- Roadmaps ----------
    @app.route('/api/career-paths/<int:path_id>/roadmap', methods=['GET'])
    def get_roadmap(path_id):
        from .models import CareerPath
        path = CareerPath.query.get(path_id)
        if not path:
            return jsonify({"error": "Career path not found"}), 404
        
        roadmap_data = roadmaps.get(
            path.name,
            [{"phase": "Coming Soon", "topics": [{"name": "Under Construction", "subtopics": []}]}]
        )
        return jsonify(roadmap_data)

    # ---------- User Progress ----------
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

        existing = UserCompletedCourse.query.filter_by(
            user_id=user_id, course_id=course.id
        ).first()
        if existing:
            return jsonify({"message": "Course already marked complete"}), 200

        new_completed = UserCompletedCourse(user_id=user_id, course_id=course.id)
        db.session.add(new_completed)
        db.session.commit()
        return jsonify({"message": f"Course {course_code} marked complete for user {user_id}"}), 201

    return app
