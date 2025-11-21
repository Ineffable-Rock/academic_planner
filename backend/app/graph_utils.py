# app/graph_utils.py
from collections import deque

def find_shortest_path(all_courses_db, all_prereqs_db, completed_course_ids, target_course_ids):
    # We need a graph that points from prerequisite -> course
    adj_list = {c.id: [] for c in all_courses_db}
    in_degree = {c.id: 0 for c in all_courses_db}

    for prereq_edge in all_prereqs_db:
        prereq_id = prereq_edge.prerequisite_id
        course_id = prereq_edge.course_id
        adj_list[prereq_id].append(course_id)
        in_degree[course_id] += 1

    # The queue will store tuples of (course_id, path_so_far)
    queue = deque()
    
    # Start the search from courses that have no prerequisites OR whose prerequisites are already completed
    for course_id, degree in in_degree.items():
        if degree == 0 and course_id not in completed_course_ids:
            queue.append((course_id, [course_id]))

    while queue:
        current_course_id, path = queue.popleft()

        # If we have reached a target course, this is one of the shortest paths
        if current_course_id in target_course_ids:
            # For simplicity, we return the first shortest path found.
            # A full implementation might find all shortest paths.
            
            # We need to find the full path to satisfy all targets
            # This simplified version just returns the path to the FIRST target it finds.
            # To enhance, you would continue the search until paths to all targets are found.
            
            # Let's find the remaining targets and just append them if they can be taken
            remaining_targets = set(target_course_ids) - set(path)
            
            # A simple topo-sort for the remaining targets
            path_set = set(path)
            temp_in_degree = in_degree.copy()
            
            # Remove completed courses from degree count
            for cid in completed_course_ids:
                for neighbor in adj_list.get(cid, []):
                    if temp_in_degree[neighbor] > 0:
                        temp_in_degree[neighbor] -= 1

            q_topo = deque([c for c in remaining_targets if temp_in_degree[c] <= len(path_set)])
            
            while q_topo:
                c = q_topo.popleft()
                if c not in path_set:
                    path.append(c)
                    path_set.add(c)
                
                for neighbor in adj_list.get(c, []):
                    if neighbor in remaining_targets:
                        temp_in_degree[neighbor] -= 1
                        if temp_in_degree[neighbor] == 0:
                            q_topo.append(neighbor)
            
            return path # Return the found path

        # Continue the search to the next courses
        for neighbor_id in adj_list[current_course_id]:
            # We can only proceed if all prerequisites for the neighbor are in the current path or already completed
            all_prereqs_for_neighbor = {p.prerequisite_id for p in all_prereqs_db if p.course_id == neighbor_id}
            if all_prereqs_for_neighbor.issubset(set(path) | set(completed_course_ids)):
                 queue.append((neighbor_id, path + [neighbor_id]))

    return [] # Return empty list if no path is found