cadena = "Roberto, desarrollador, 28"

indiceEdad = cadena.lastIndexOf(",")

edad = cadena.substring(indiceEdad + 2, cadena.length)

console.log(edad)
