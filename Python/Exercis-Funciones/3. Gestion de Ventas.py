# Create a function to add product sold
def add_product(producto, precio):

    nueva_venta = {"Producto": producto, "Precio": precio}

    product_sales.append(nueva_venta)

    print(f"Vneta registrada: {producto} - {precio}")

# Create a function to display the sales of product
def display_sales():

    if not product_sales:
        print("No hay ventas registradas todavia")

    for venta in product_sales:
        print(f"Producto: {venta["Producto"]} | Precio: {venta['Precio']}")

product_sales = [
    {"Producto": "producto 1", "Precio": 2.000},
    {"Producto": "producto 2", "Precio": 2.100}
]

add_product(product_sales)

display_sales()