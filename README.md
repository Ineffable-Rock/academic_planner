# AI-Powered Academic Planner


## Project Description

A web application designed to help college students visualize course dependencies, plan their academic schedule, and discover optimal paths to their career goals using AI-driven recommendations and graph algorithms.

## Technology Stack

-   **Backend:** Python, Flask, Flask-SQLAlchemy
-   **Database:** SQLite
-   **AI/ML:** Pandas, Scikit-learn
-   **Frontend:** React, Vis.js, Axios

## How to Run the Backend

1.  Clone the repository: `git clone [your-repo-url]`
2.  Navigate to the project directory: `cd academic_planner`
3.  Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On macOS/Linux
    venv\Scripts\activate    # On Windows
    ```
4.  Install the required packages: `pip install -r requirements.txt` 
    *(Note: You'll need to create a `requirements.txt` file first by running `pip freeze > requirements.txt` in your terminal)*
5.  Initialize the database (this will also add sample data): `flask init-db`
6.  Run the application: `python run.py`
7.  The backend will be running at `http://127.0.0.1:5000`

## API Endpoints

### Courses & Prerequisites
-   `GET /api/courses`: Returns a list of all available courses.
-   `GET /api/prerequisites`: Returns the prerequisite relationships for the graph.

### User Authentication
-   `POST /api/register`: Creates a new user. (Body: `{"username": "user", "password": "pw"}`)
-   `POST /api/login`: Logs in a user. (Body: `{"username": "user", "password": "pw"}`)

### User-Specific Data
-   `POST /api/user/<user_id>/courses`: Marks a course as complete for a user. (Body: `{"course_code": "CS101"}`)
-   `GET /api/user/<user_id>/courses`: Gets a list of completed courses for a user.

### AI Features
-   `POST /api/recommend`: Gets AI-driven course recommendations. (Body: `{"completed_courses": ["CS101"]}`)
-   `POST /api/career-path`: Finds the shortest path to a career goal. (Body: `{"user_id": 1, "career_name": "Data Scientist"}`)