# Create a function called "validar_formulario" to received different fields: Nombre, Correo Electronico y Numero de Telefono
def validar_formulario(nombre, correo_electronico, numero_telefono):

    # Verify if the value the fulfill with requirement specific
    if nombre.len() >= 3 and numero_telefono == 9 and "@" in correo_electronico:
        print("Los datos ingresados son correctos")
    else:
        print("Los datos ingresados no son correctos")

nombre = "felipe"
correo_electronico = "felipe@email.com"
numero_telefono = 978443245

validar_formulario(nombre, correo_electronico, numero_telefono)