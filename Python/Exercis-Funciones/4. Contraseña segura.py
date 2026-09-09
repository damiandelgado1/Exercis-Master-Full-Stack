from creador import generar_contraseña


def menu_interactivo():

    print("=" * 40)
    print("GENERADOR DE CONTRASEÑAS SEGURAS")
    print("=" * 40)

    try:
        longitud = int(input("Introduce la longitud de la Contraseña: "))

        if longitud < 1:
            print("La longitud debe ser mayor a 0")
            return

        print("Configura tus Preferencias")

        incluye_mayuscula = input("¿Incluir letras Mayusculas? ").strip().upper() == "S"
        incluye_minuscula = input("¿Incluir letras Minusculas? ").strip().upper() == "S"
        incluye_numero = input("¿Incluir numeros? ").strip().upper() == "S"
        incluye_simbolos = input("¿Incluir simbolos / caracteres especiales? ").strip().upper() == "S"

        password_final = generar_contraseña(longitud, incluye_mayuscula, incluye_minuscula, incluye_numero, incluye_simbolos)

        print("\n" + "=" * 40)
        print(f"Tu contraseña generada es: \n {password_final}")
        print("=" * 40)

    except ValueError:
        print("Error: Por favor, introduce un numero valido para la longitud")

if __name__ == "__main__":
    menu_interactivo()