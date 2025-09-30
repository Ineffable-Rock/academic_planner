# app/__init__.py
from flask import Flask,jsonify
from flask_sqlalchemy import SQLAlchemy
import joblib
import pandas as pd
from flask import request
from werkzeug.security import generate_password_hash, check_password_hash

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

#an application factory builds and configures the Flask application
def create_app():
    app = Flask(__name__)

    # This sets the location of your database file.
    # 'sqlite:///project.db' means the file will be named 'project.db' and
    # will be in the main instance folder.
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # Optional: to disable a warning

    # Initializing the database with the app
    db.init_app(app)

    # 4. Define a custom command to create the database tables
    @app.cli.command('init-db')
    def init_db_command():
        """Clears the existing data and creates new tables with sample data."""
        # Import models here to avoid circular import
        from . import models
        
        db.drop_all()  # Clear existing tables
        db.create_all() # Create new tables

        # --- Create Sample Courses ---
        c1 = models.Course(course_code="CS101", course_name="Intro to Programming")
        c2 = models.Course(course_code="CS102", course_name="Data Structures")
        c3 = models.Course(course_code="CS201", course_name="Algorithms")
        c4 = models.Course(course_code="MA210", course_name="Discrete Mathematics")
        c5 = models.Course(course_code="CS301", course_name="Operating Systems")
        c6 = models.Course(course_code="DB101", course_name="Intro to Databases")
        c7 = models.Course(course_code="ML401", course_name="Machine Learning")
        
        # --- Define Prerequisites ---
        c2.prerequisites.append(c1)
        c3.prerequisites.append(c2)
        c3.prerequisites.append(c4)
        c5.prerequisites.append(c2)
        c7.prerequisites.append(c3) # ML requires Algorithms
        c6.prerequisites.append(c2) # Databases require Data Structures

        # --- Create Sample Career Paths ---
        # 1. Data Scientist
        path1 = models.CareerPath(name="Data Scientist")
        path1.required_courses.extend([c3, c6, c7]) # Algorithms, Databases, ML

        # 2. Backend Web Developer
        path2 = models.CareerPath(name="Backend Web Developer")
        path2.required_courses.extend([c1, c2, c5, c6]) # Intro to Prog, DS, OS, Databases

        # 3. AI/ML Engineer
        path3 = models.CareerPath(name="AI/ML Engineer")
        path3.required_courses.extend([c2, c3, c4, c7]) # DS, Algos, Discrete Math, ML

        # 4. Cybersecurity Analyst
        path4 = models.CareerPath(name="Cybersecurity Analyst")
        path4.required_courses.extend([c2, c3, c4, c5]) # DS, Algos, Discrete Math, OS

        # 5. Systems Engineer
        path5 = models.CareerPath(name="Systems Engineer")
        path5.required_courses.extend([c1, c2, c3, c5]) # Intro to Prog, DS, Algos, OS

        # --- Add ALL new objects to the database session before committing ---
        db.session.add_all([c1, c2, c3, c4, c5, c6, c7, path1, path2, path3, path4, path5])
        db.session.commit()
        
        print("Initialized and populated the database with sample data and 5 career paths.")

    @app.route('/')
    def index():
        from .models import Course  # Importing here to avoid circular import

        #A simple query to test the database connection
        course_count = Course.query.count()
        return f"Hello from the Backend! There are {course_count} courses in the DB."
    @app.route('/api/courses', methods=['GET'])
    def get_courses():
        from .models import Course
        courses = Course.query.all()

        courses_list = []
        for course in courses:
            courses_list.append({
                'id': course.id,
                'course_code': course.course_code,
                'course_name': course.course_name,
                'description': course.description
            })
        return jsonify(courses_list)
    
    @app.route('/api/prerequisites')
    def get_prerequisites():
        from .models import prerequisites

        edges_query = db.session.query(prerequisites).all()
        
        edges_list = []
        for edge in edges_query:
            edges_list.append({
                'from': edge.prerequisite_id,
                'to': edge.course_id
            })
        return jsonify(edges_list)
    
    @app.route('/api/recommend', methods=['POST'])
    def recommend_courses():
        if recommender_model is None:
            return jsonify({"error": "Recommendation model not available."}), 500
        
        #getting the list of all completed courses codes from the request
        data = request.get_json()
        completed_courses = data.get('completed_courses', [])
        
        if not completed_courses:
            return jsonify({"recommendations":[]})
        
        # Create a new user vector based on the input
        new_user_vector = pd.Series([0] * len(course_list), index=course_list)
        new_user_vector[completed_courses] = 1
        
        # Find nearest neighbors
        distances, indices = recommender_model.kneighbors([new_user_vector], n_neighbors=10)
        
        # Get recommendations
        neighbor_courses = pd.Series(0,index=course_list)
        # Find courses taken by neighbors
        for i in indices[0]:
            pass

        all_courses = pd.Index(course_list)
        popular_courses = all_courses.drop(completed_courses)
        recommendations = list(popular_courses.to_series().sample(min(5, len(popular_courses))).index)

        return jsonify({"recommendations": recommendations})
    
    @app.route('/api/register',methods=['POST'])
    def register():
        from .models import User
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return jsonify({"error": "Username and password are required"}), 400
        
        if User.query.filter_by(username=username).first():
            return jsonify({"error": "Username already exists"}), 409
        
        hashed_password  = generate_password_hash(password, method='pbkdf2:sha256')
        new_user = User(username=username, password_hash = hashed_password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": f"User {username} created sccessfully"}),201
    
    @app.route('/api/login',methods=['POST'])
    def login():
        from .models import User
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        user = User.query.filter_by(username=username).first()

        if not user or not check_password_hash(user.password_hash, password):
            return jsonify({"error": "Invalid username or password"}), 401
        
        return jsonify({"message": "Login sccessful", "user_id": user.id})
    

    @app.route('/api/user/<int:user_id>/courses', methods=['GET'])
    def get_user_courses(user_id):
        from .models import UserCompletedCourse
        completed = UserCompletedCourse.query.filter_by(user_id=user_id).all()
        completed_ids = [c.course_id for c in completed]
        return jsonify({"completed_course_ids": completed_ids})

    @app.route('/api/user/<int:user_id>/courses', methods=['POST'])
    def add_user_course(user_id):
        from .models import UserCompletedCourse, Course
        data = request.get_json()
        course_code = data.get('course_code')

        course = Course.query.filter_by(course_code=course_code).first()
        if not course:
            return jsonify({"error": "Course not found"}), 404

        # Check if the entry already exists
        existing = UserCompletedCourse.query.filter_by(user_id=user_id, course_id=course.id).first()
        if existing:
            return jsonify({"message": "Course already marked as complete"}), 200

        new_completed = UserCompletedCourse(user_id=user_id, course_id=course.id)
        db.session.add(new_completed)
        db.session.commit()

        return jsonify({"message": f"Course {course_code} marked as complete for user {user_id}"}), 201
    
    @app.route('/api/career-path', methods=['POST'])
    def get_career_path():
        # Import your models and the new algorithm function
        from .models import Course, UserCompletedCourse, CareerPath, prerequisites
        from .graph_utils import find_shortest_path
        
        data = request.get_json()
        user_id = data.get('user_id')
        career_name = data.get('career_name')

        # 1. Get user's completed courses
        completed_courses = UserCompletedCourse.query.filter_by(user_id=user_id).all()
        completed_course_ids = {c.course_id for c in completed_courses}

        # 2. Get target courses for the career path
        career_path = CareerPath.query.filter_by(name=career_name).first()
        if not career_path:
            return jsonify({"error": "Career path not found"}), 404
        
        target_course_ids = {c.id for c in career_path.required_courses}
        
        # Filter out targets the user has already completed
        targets_to_find = target_course_ids - completed_course_ids
        if not targets_to_find:
            return jsonify({"path": [], "message": "You have already completed all required courses for this path!"})

        # 3. Get all course data for the algorithm
        all_courses_db = Course.query.all()
        all_prereqs_db = db.session.query(prerequisites).all()

        # 4. Run the algorithm!
        path_ids = find_shortest_path(all_courses_db, all_prereqs_db, completed_course_ids, targets_to_find)
        
        # 5. Convert path of IDs back to course objects for the response
        path_courses = Course.query.filter(Course.id.in_(path_ids)).all()
        # Preserve the order from the algorithm
        ordered_courses = sorted(path_courses, key=lambda c: path_ids.index(c.id))

        path_details = [{'code': c.course_code, 'name': c.course_name} for c in ordered_courses]

        return jsonify({"path": path_details})


    return app