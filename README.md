# 🎓 AcaPlanner

**AcaPlanner** is an AI-powered academic planning assistant designed to help students navigate their university journey. It combines interactive graph visualizations, career-focused roadmaps, and machine learning to recommend optimal course paths and track academic progress.

## 🚀 Features

* **Career Roadmaps**: Detailed, step-by-step learning paths for careers like Web Development, Data Science, AI/ML, and Cybersecurity.
* **Interactive Prerequisite Graphs**: Visualize complex course dependencies using dynamic node-link graphs powered by Vis.js.
* **AI Course Recommendations**: Personalized course suggestions based on your completed subjects using a K-Nearest Neighbors (KNN) machine learning model.
* **Progress Dashboard**: Track completed courses and view your academic trajectory.
* **Secure Authentication**: Seamless user management via **Clerk**.
* **Modern UI**: A responsive, dark-themed interface built with React, Tailwind CSS, and Framer Motion.

## 🛠️ Tech Stack

### Frontend
* **Framework**: React (Vite)
* **Styling**: Tailwind CSS, Framer Motion
* **Visualization**: Vis.js (Network graphs)
* **Auth**: Clerk
* **Database (Contact Form)**: Firebase Firestore

### Backend
* **Framework**: Python Flask
* **Database**: SQLite (SQLAlchemy)
* **AI/ML**: Scikit-learn (NearestNeighbors), Pandas, Joblib

---

## 📦 Installation & Setup

Follow these steps to get the project running locally.

### 1. Clone the Repository

```bash
git clone [https://github.com/ineffable-rock/academic_planner.git](https://github.com/ineffable-rock/academic_planner.git)
cd academic_planner

2. Backend Setup
The backend handles the API, database, and AI model logic.

Navigate to the backend directory:

Bash

cd backend
Create and activate a virtual environment (optional but recommended):

Bash

python -m venv venv
# Windows
venv\Scripts\activate
# Mac/Linux
source venv/bin/activate
Install dependencies:

Bash

pip install -r requirements.txt
Initialize the Database: This command creates project.db and populates it with sample courses and career paths.

Bash

flask init-db
Train the AI Model: Generate the course_recommender.joblib file required for the recommendation engine.

Bash

python train_model.py
Start the server:

Bash

python run.py
The backend runs at http://127.0.0.1:5000.

3. Frontend Setup
The frontend is the React user interface.

Open a new terminal and navigate to the frontend directory:

Bash

cd frontend
Install Node dependencies:

Bash

npm install
Start the development server:

Bash

npm run dev
The frontend runs at http://localhost:5173.

⚙️ Configuration
Environment Variables
While the current codebase contains hardcoded keys for development ease, it is recommended to set up .env files for production.

Frontend Keys (frontend/src/main.jsx & firebase.js):

VITE_CLERK_PUBLISHABLE_KEY: Your Clerk Auth key.

VITE_FIREBASE_API_KEY: Your Firebase configuration keys.

📂 Project Structure
Plaintext

academic_planner/
├── backend/
│   ├── app/
│   │   ├── models.py          # Database models (User, Course, CareerPath)
│   │   ├── roadmaps_data.py   # Static data for career paths
│   │   ├── graph_utils.py     # Shortest path algorithms
│   │   └── __init__.py        # App factory & API routes
│   ├── train_model.py         # ML model training script
│   ├── generate_data.py       # Fake data generator
│   └── run.py                 # Server entry point
│
└── frontend/
    ├── src/
    │   ├── components/        # UI Components (CourseGraph, Sidebar, etc.)
    │   ├── pages/             # LandingPage, DashboardApp
    │   ├── assets/            # SVGs and static assets
    │   └── main.jsx           # React Entry point
    └── vite.config.js         # Vite config
🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

📄 License
This project is open-source and available under the MIT License.
