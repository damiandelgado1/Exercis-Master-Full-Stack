# Create a function called "factorial" and return which number positive
def factorial(n):

    if n < 0:
        raise ValueError("No existe el factorial de numeros negativos")

    resultado = 1

    for i in range(1, n + 1):
        resultado *= i

    return resultado

print(factorial(5))