# Create a dictionary of the votes
candidates = {
    "juan": "5 votos",
    "benjamin": "3 votos",
    "alberto": "4 votos"
}

# Display of completed list of candidates and their votes
print(candidates)

# Display the candidate winner with most votes
winner_candidate = max(candidates)

# Calculate of percentage obtained by every candidate
total_vote = sum(candidates.values())

percentage = {
    candidate: (candidates / total_vote) * 100 for candidate, candidates in candidates.items()
}

print(percentage)