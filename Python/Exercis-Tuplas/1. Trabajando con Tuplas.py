# Create a tuple with 3 element
tuple_1 = (1, 2, 3)

# Display every one in line
print(*tuple_1, sep="\n")

# Create a list with 3 element
list_1 = [1, 2, 3]

# Modify the list with element
list_1[0] = 4
list_1[1] = 5
list_1[2] = 6

print(list_1)

# Create a tuple with 3 element
tuple_2 = (1, 2, 3)

# Modify the tuple with element
list_2 = list(tuple_2)

print(list_2)

# Create a tuple with number integer
tuple_3 = (1, 2, 3, 4, 5)

# Addition all element in the tuple
print(sum(tuple_3))

# Create a tuple with string
tuple_4 = ("manzana", "durazno", "pera")

# Create a new tuple with first character of every string
new_tuple_2 = tuple(s[0] for s in tuple_4)

print(new_tuple_2)

# Create a tuple with number
tuple_5 = (1, 2, 3, 4, 5, 6, 7, 8)

# Return a tuple with par number
par_number = tuple(x for x in tuple_5 if x % 2 == 0)

print(par_number)

# Create a tuple with number
tuple_6 = (1, 2, 3, 4, 5, 6, 7, 8)

# Return a tuple with number in ordered falling
tuple_falling = tuple(sorted(tuple_6, reverse=True))

print(tuple_falling)

# Create a tuple with repeat number
repeat_number = (1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 5, 5)

# Delete a repeat number in the tuple
without_repeat = tuple(set(repeat_number))

print(without_repeat)

# Create a tuple with integer number
tuple_7 = (1, 2, 3, 4, 5)

# Return true if the number it is in tuple
if 5 in tuple_7:
    print('El numero si esta en la tupla')

else:
    print('El numero no esta en la tupla')

# Create 2 tuple
tuple_8 = (1, 2, 3, 4, 5)
tuple_9 = (6, 7, 8, 9, 10)

new_tuple_2 = tuple_8 + tuple_9

print(new_tuple_2)

# Create a tuple with number
number = (2, 34, 14, 23, 10, 8, 20)

min_number = min(number)
max_number = max(number)

print(min_number)
print(max_number)

# Create a tuple with string
string = ("manzana", "durazno", "pera")

long_string = max(string)
short_string = min(string)

print(long_string)
print(short_string)

# Create a tuple
tuple_10 = ("manzana", "durazno", "pera")

# Return a tuple with ordered reversed
reversed_tuple = tuple_10[::-1]

print(reversed_tuple)

# Create a tuple of tuple
tuple_of_tuple = ((1, 2), (3, 4), (5, 6), (7, 8))

# Addition element in tuple
result = tuple(map(sum, tuple_of_tuple))

print(result)