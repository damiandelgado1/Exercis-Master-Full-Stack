# Create a tuple with Book and Author, every tuple has the name book and author
book_list = [
    ("El aleph", "Jorge Luis Borges"),
    ("Cien años de soledad", "Gabriel Garcia Marquez"),
    ("La ciudad y los perros", "Mario Vargas Llosa")
]

# Return a new list of tuple has the name of book and last_name author
for book, author in book_list:
    print(f"Libro: {book} | Autor: {author}")

total_book = len(book_list)

print(total_book)