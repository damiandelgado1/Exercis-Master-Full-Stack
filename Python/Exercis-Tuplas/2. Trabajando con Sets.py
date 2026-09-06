import math


# Create a set
set_1 = {1, 2, 3, 4, 5}

# Delete a element in the set
set_1.remove()

print(set_1)

# Create a set empty
set_2 = {}

print(set_2)

# Create 2 set
set_3 = {1, 2, 3, 4, 5}
set_4 = {4, 5, 6, 7, 8}

# Find the union, intersection and difference
print(set_3.union(set_4))
print(set_3.intersection(set_4))
print(set_3.difference(set_4))

# Create 2 set
set_5 = {1, 2, 3, 4, 5}
set_6 = {3, 4, 5, 6, 7}

# Create a new set with common element
common_element = set_5.intersection(set_6)

print(common_element)

# Create a set with number
set_7 = {34, 55, 14, 24, 8}

# Find the max and min number
max_number = max(set_7)
min_number = min(set_7)

print(max_number)
print(min_number)

# Create 2 set
set_8 = {1, 2, 3, 4, 5}
set_9 = {3, 4, 5, 6, 7}

# Create a new set with common element
common_element = set_8.intersection(set_9)

print(common_element)

# Create a set with color
set_10 = {"azul", "verde", "rojo", "negro"}

# Check if a color it is in set
if "azul" in set_10:
    print("El azul si esta en el set")
else:
    print("El azul no esta en el set")

# Create 2 set
first_set = {1, 2, 3, 4, 5}
second_set = {3, 4, 5, 6, 7}

# Create a new set with element of first set
result = first_set.difference(second_set)

print(result)

# Create a set with integer number
number = {1, 2, 3, 4, 5, 6, 7, 8, 9}

# Return product of all number in the set
result_2 = math.prod(number)

print(result_2)
