# train_model.py
import pandas as pd
from sklearn.neighbors import NearestNeighbors
from scipy.sparse import csr_matrix
import joblib

print("Starting model training...")

# 1. Load the data
df = pd.read_csv('student_data.csv')

# 2. Create the user-item matrix
# This table will have students as rows, courses as columns,
# and 1s or 0s indicating if the student took the course.
user_item_matrix = df.pivot_table(index='student_id', columns='course_code', aggfunc='size', fill_value=0)

# Convert to a sparse matrix for efficiency
user_item_matrix_sparse = csr_matrix(user_item_matrix.values)

# 3. Configure and train the NearestNeighbors model
# The model will learn how "close" students are to each other based on courses taken.
model = NearestNeighbors(metric='cosine', algorithm='brute')
model.fit(user_item_matrix_sparse)

# 4. Save the trained model and the list of courses for later use
joblib.dump(model, 'course_recommender.joblib')
joblib.dump(user_item_matrix.columns, 'course_list.joblib')

print("Model training complete. 'course_recommender.joblib' and 'course_list.joblib' saved.")