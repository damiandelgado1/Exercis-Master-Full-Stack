# Create a function called "saludar" with parameter "nombre" and display the greeting custom
def saludar(nombre):
    return f"Hola {nombre}"

saludar("damian")

# Create a function called "suma" that has 2 parameter "a" and "b"
def suma(a, b):

    # Display the result of both
    return a + b

suma(2, 2)

# Write the function called "calcular_area_rectangulo" that has 2 parameter "base" and "altura"
def calcular_area_rectangulo(base, altura):

    # Calculate the area of rectangule
    return base * altura

# Define a function called "imprimir_lista" that has a list which parameter and display
def imprimir_lista(lista):

    return lista

lista = ("elemento 1", "elemento 2", "elemento 3")
imprimir_lista(lista)

# Create a function called "es_par" that has a number which parameter "cadena1" y "cadena2" and display concatenation
def es_par(cadena1, cadena2):

    return cadena1 + cadena2

cadena_1 = "Hola que tal"
cadena_2 = "Estas son funciones en Python"

es_par(cadena_1, cadena_2)

# Define a function called "obtener_maximo" that has a list of number with parameter and return the max number of list
def obtener_maximo(number):

    return number

number = (1, 2, 3, 4, 5)

obtener_maximo(number)

# Create a function called "convertir_fahrenheit_a_celsius" that has a parameter "fahrenheit"
def convertir_fahrenheit_a_celsius(fahrenheit):

    # Return the equivalent in degrees Celsius
    celsius = (fahrenheit - 32) / 1.8

    return celsius

fahrenheit = 28

convertir_fahrenheit_a_celsius(fahrenheit)

# Created a function called "calcular_edad" that has 2 parameter: "año_actual" and "año_nacimiento" and calculate of year of a person
def calcular_edad(año_actual, año_nacimiento):

    return año_actual - año_nacimiento

año_actual = 2026
año_nacimiento = 2001

calcular_edad(año_actual, año_nacimiento)

# Created a function called "es_divisible" that has 2 parameter "num" and "division"
def es_divisible(num, division):

    # Display True if "num" is divisble by "divisor"
    if num % division == 0:
        return True

    # Display False if not is
    else:
        return False

# Create a function called "mostrar_info_persona" that has three arguments of keyword: "nombre", "edad" and "city"
def mostrar_info_persona(nombre, edad, city):

    return nombre, edad, city

nombre = "alejandro"
edad = 20
city = "toronto"

mostrar_info_persona(nombre, edad, city)

# Create a function called "calcular_promedio" that has a list of number with parameter
def calcular_promedio(number_list):

    # Calculate average of the number
    return number_list

number = (1, 2, 3, 4, 5)

calcular_promedio(number)

# Create a function "calcular_potencia" that has 2 parameter "base" and "exponente"
def calcular_potencia(base, exponente):

    # Calculate the power with the given base and exponent
    return base ** exponente

base = 2
exponente = 2

calcular_potencia(base, exponente)

# Define a function called "imprimir_info_alumno" that has a positional argument "nombre" and several argument keyword: "edad", "curso" and "promedio"
def imprimir_info_alumno(nombre, edad, curso, promedio):

    return nombre, edad, curso, promedio

nombre = "jose"
edad = 19
curso = "Master de Desarrollo en Inteligencia Artificial"
promedio = "7.8"