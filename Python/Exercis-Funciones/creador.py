import secrets
import string

def generar_contraseña(longitud=12):
    caracteres = string.ascii_letters + string.digits + string.punctuation

    contraseña = ''.join(secrets.choice(caracteres) for _ in range(longitud))

    return contraseña

nueva_clave = generar_contraseña(14)

print(f"Tu contraseña segura es: {nueva_clave}")