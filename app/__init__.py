# app/__init__.py
from flask import Flask,jsonify
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

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

        # Define Prerequisites (the graph edges)
        c2.prerequisites.append(c1)
        c3.prerequisites.append(c2)
        c3.prerequisites.append(c4)
        c5.prerequisites.append(c2)

        #  Add to Database and Commit
        db.session.add_all([c1, c2, c3, c4, c5])
        db.session.commit()
        
        print("Initialized and populated the database with sample data.")

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
    

    return app