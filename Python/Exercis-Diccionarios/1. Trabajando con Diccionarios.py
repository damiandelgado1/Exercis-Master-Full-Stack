# Create a dictionary called "my_dictionary"
my_dictionary = {}

# Add key-value pair in "my_dictionary" which clue is "name" and the value is your name
my_dictionary["name": "Damián"]

# Access and display asociated value with clue "name" in "my_dictionary"
print(my_dictionary["name"])

# Verify if clue "edad" exist in "my_dictionary". Display "True" if exist and "False" if not exit
if "edad" in my_dictionary:
    print("La clave edad si existe")
else:
    print("La clave edad no existe")

# Created a dictionary called "student" with next key-value pair: name, edad and content
student = {"name": "edad", "student": ""}

# Update the value clue "edad" in dictionary "student" to display actuall friend
student["edad"] = 20

print(student)

# Delete a key-value pair "materia" of the dictionary "student"
materia_delete = student.pop("materia")

print(materia_delete)

# Display all clue in dictionary "student"
print(student.keys())

# Create a dictionary called "agenda" with 3 input: Juan with value 1234567890, Joana with value 9876543210 and Jimena with value 5555555555
agenda = {"Juan": 1234567890, "Joana": 9876543210, "Jimena": 5555555555}

# Add new input dictionary "agenda" with clue Julio and value 9998887777
agenda["Julio"] = 9998887777

# Display the number input in dictionary "agenda"
input_number = len(agenda)

print(input_number)

# Create list "key_points" with all key points of dictionary "agenda"
key_points = list(agenda.keys())

print(key_points)

# Verify if the clue "Juan" exit in dictionary "agenda". Display "True" if exit and "False" if not exit
if "Juan" in agenda:
    print("La clave Juan si existe en el diccionario")
else:
    print("La clave Juan no existe en el diccionario")

# Delete input with clue "Jimena"
delete_jimena = agenda.pop("Jimena")

# Use for loop in all key_points in the dictionary "agenda" and display every key-value in format "Nombre: Numero"
for clue, value in agenda.items():
    print(f"{clue}: {value}")

# Use the "get()" method for obtain the value asociated with clue "Juan" in dictionary "agenda"
result = agenda.get("Juan")

print(result)

# Delete all input in dictionary "agenda"
delete_input = agenda.clear()

print(delete_input)
