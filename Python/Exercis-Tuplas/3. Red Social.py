# Create database of a Social Media and every tuple has a Friend list
social_media = [
    ("Juan", ["Maria", "Pedro", "Luis"]),
    ("Maria", ["Juan", "Pedro", "Juan"]),
    ("Pedro", ["Juan", "Maria"]),
    ("Luis", ["Pedro"])
]

# Delete a account duplicate 
without_duplicate = tuple(set(social_media))

# Return tuple of tuples with number of friend by user
total_friend = sum(len(group) for group in social_media)

print(total_friend)

# Return tuple of tuples the user with more friend
result_list = []
max_friend = -1

for user, friend_list in social_media:

    unique_friend = set(social_media)
    real_amount = len(unique_friend)

    user_tuple = (user, real_amount)

    result_list.append(user_tuple)

    if real_amount > max_friend:

        max_friend = real_amount
        user_with_more_friend = user_tuple

final_tuple_of_tuple = tuple(result_list)

exercis_final = (final_tuple_of_tuple, user_with_more_friend)

print("Resultado final (Tupla de tuplas + Usuario con mas amigos): ")
print(exercis_final)