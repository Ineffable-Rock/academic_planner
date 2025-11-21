from . import db
from . import db

# The association table remains the same
prerequisites = db.Table('prerequisites',
    db.Column('course_id', db.Integer, db.ForeignKey('course.id'), primary_key=True),
    db.Column('prerequisite_id', db.Integer, db.ForeignKey('course.id'), primary_key=True)
)

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    course_code = db.Column(db.String(20), unique=True, nullable=False)
    course_name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)

    # This defines the many-to-many relationship between a course and its prerequisites.
    # It tells SQLAlchemy to use the 'prerequisites' table as the link.
    prerequisites = db.relationship(
        'Course',  # The model on the "other side" of the relationship is also 'Course'
        secondary=prerequisites,  # The association table that links them
        # primaryjoin tells SQLAlchemy how to link the left side (a course) to the association table
        primaryjoin=(prerequisites.c.course_id == id),
        # secondaryjoin tells SQLAlchemy how to link the association table to the right side (a prerequisite course)
        secondaryjoin=(prerequisites.c.prerequisite_id == id),
        # backref creates a "reverse" relationship, allowing you to see what courses require this one
        backref=db.backref('is_prerequisite_for', lazy='dynamic'),
        lazy='dynamic'
    )

    def __repr__(self):
        return f'<Course {self.course_code}>'
    
class User(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(80), unique=True,nullable = False)
    password_hash = db.Column(db.String(128), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'
    
# In app/models.py, add this new class
class UserCompletedCourse(db.Model):
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), primary_key=True)

career_path_courses = db.Table('career_path_courses',
    db.Column('career_path_id', db.Integer, db.ForeignKey('career_path.id'), primary_key=True),
    db.Column('course_id', db.Integer, db.ForeignKey('course.id'), primary_key=True)
)

class CareerPath(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    
    # Relationship to link career paths with courses
    required_courses = db.relationship('Course', secondary=career_path_courses, lazy='subquery',
        backref=db.backref('paths', lazy=True))

    def __repr__(self):
        return f'<CareerPath {self.name}>'