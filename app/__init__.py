# app/__init__.py
from flask import Flask

#an application factory builds and configures the Flask application
def create_app():
    app = Flask(__name__)

    @app.route('/')
    def index():
        return "Hello from the Backend!"

    return app