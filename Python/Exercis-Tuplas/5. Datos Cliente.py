# Create a database with client name, email and phone number
data_base_1 = [
    ("Juan", "juan@example.com", "555-5678"),
    ("Pedro", "pedro@example.com", "555-9012")
]

# Create a database with client name, address and delivery history
data_base_2 = [
    ("Juan", "Calle 123", ["Libro 1", "Libro 2"]),
    ("Maria", "Calle 456", ["Libro 3"]),
    ("Luis", "Calle 789", ["Libro 4"])
]

client_common = []

name_database_2 = (data_base_1[0][0], data_base_2[1][0], data_base_2[2][0])

# Return the name of client in database 1 and database 2
for client in data_base_1:
    client_name = client[0]

    if name_database_2.count(client_name) > 0:
        client_common.append(client)

print(client_common)