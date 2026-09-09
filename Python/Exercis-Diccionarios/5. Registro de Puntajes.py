# Create a dictionary with points of the player
player = {
    "juan": 80.0,
    "alberto": 77.3,
    "pablo": 82.0,
    "felipe": 83.4,
    "jose": 78.2
}

# Enter the name and point
player["benjamin"] = 73.4

# Display the point most high
best_player = max(player)

print(best_player)

# Display the total amount of player
total_player = len(player)

print(total_player)