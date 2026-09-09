# Create a dictionary to storage information of the Sale
sale_dictionary = {
    "Product_1": 4,
    "Product_2": 3,
    "Product_3": 7,
    "Product_4": 5,
    "Product_5": 2
}

# Register the sale of the Product
sale_dictionary["Product_6"] = sale_dictionary.setdefault("Manzana", 0) + 5

print(sale_dictionary)

# Update the amount sold of a exist Product
sale_dictionary.update({"Product_7": 5})

print(sale_dictionary)

# Calculate the total of Sale daily
amount = sale_dictionary.values()

total_sales = sum(amount)
print(total_sales)