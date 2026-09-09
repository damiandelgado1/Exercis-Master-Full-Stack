# Create a function "numero_triangular" to calculate the n-esimo triangular number
def numero_triangular(number):

    if number == 1:
        return 1

    else:
        return number + numero_triangular(number - 1)

resultado = numero_triangular(5)

print(f"El 5to numero triangular es: {resultado}")