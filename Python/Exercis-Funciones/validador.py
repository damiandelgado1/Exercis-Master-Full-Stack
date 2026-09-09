# Create a function called "validar_contraseña" to received a string
def validar_contraseña(password):

    # Verify if is secure: min_length, mayus_letter, minus_letter, numbers and special characters
    if password.len() >= 5 and "ABCDEFGHIJKLMNÑOPQRSTWXYZ" in password and "abcdefghijklmnñopqrstwxyz" in password and "123456789" in password and "$%&":

        return True

    else:
        return False

password = "Contraseña123"

validar_contraseña(password)