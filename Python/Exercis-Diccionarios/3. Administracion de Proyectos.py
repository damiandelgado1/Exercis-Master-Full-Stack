# Create a dictionary with list of task
tasks = {
    "task 1": "juan",
    "task 2": "alberto",
    "task 3": "alejandro",
    "task 4": "benjamin",
    "task 6": "",
    "task 7": ""
}

# Append the new Task
tasks["task 5"] = "pedro"

# Assign responsable in task exist
tasks["task 6"] = "cristian"
tasks["task 7"] = "roberto"

# Update the description of the task
tasks.update({"task 3": "jose"})

# Display the list complet of task and responsables
for task, responsable in tasks.items():
    print(f"{task}: {responsable}")