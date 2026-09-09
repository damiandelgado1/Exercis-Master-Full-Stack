# Create a dictionary of workers
workers = {
    "juan": {"salario": 2.000, "departamento": "Finanzas"},
    "felipe": {"salario": 2.200, "departamento": "Sistemas"},
    "alberto": {"salario": 2.500, "departamento": "Marketing"}
}

# Add new worker
workers["mateo"] = [2.000, "Finanzas"]

# Update the salary of a worker exist
workers["juan"] = [2.500]

# Display the complet list of worker
print(workers)

# Calculate of average salary of apartment
total_salary = sum(datos["salary"] for datos in workers.values())

total_workers = len(workers)

average = total_salary / total_workers

print(f"El salario promedio es: {average}")