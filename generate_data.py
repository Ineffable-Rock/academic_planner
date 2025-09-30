import pandas as pd
import random

courses = ["CS101", "CS102", "CS201", "MA210", "CS301", "EE101", "PHY101", "CH101"]

#archetypes to create logical patterns in data
archetypes = {
    "cs_major": ["CS101", "CS102", "CS201","MA210", "CS301"],
    "science_minor": ["PHY101", "CH101", "MA210"],
    "ee_curious": ["EE101", "CS101"]
}

num_students = 500
student_courses = []

print("Let's generate fake data now..")

for i in range(num_students):
    #Each student gets a primary archetype
    profile = random.choice(list(archetypes.keys()))
    courses_taken = set(archetypes[profile])

    #Add a few more random courses ti simulate electives
    num_electives = random.randint(0, 2)
    for  _ in range(num_electives):
        courses_taken.add(random.choice(courses))
    
    for course in courses_taken:
        student_courses.append({"student_id": i, "course_code": course})
    
#creating a pandas dataframe
df = pd.DataFrame(student_courses)

#Saving to a csv file
df.to_csv('student_data.csv',index=False)

print("Successfully generated 'student_data.csv'")