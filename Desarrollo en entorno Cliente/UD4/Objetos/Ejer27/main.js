opcion = ""


//Clase Alumno
notas = new Map([['DWC',6],['DWS',7],['DAW',7],['DI',5]])
notas1 = new Map([['DWC',8],['DWS',5],['DAW',10],['DI',10]])

al1 = new Alumno('Jose','Iglesias','w7','1990-09-24','DAW',notas1)
al2 = new Alumno('Pepe','Antonio','w5','2010-09-24','DAW',notas)


//Clase Aula

alumnos = [al1, al2]
aula1 = new Aula(alumnos)

console.log(aula1)



console.log(al1.imprimirAlumno())

console.log(" ")
console.log("Nota media")
console.log(al1.notaMedia())

console.log(" ")
console.log("Mejor nota")
console.log(al1.mejorNota())


console.log("BuscarDNI")
console.log(aula1.buscarDni('w5'))

console.log(" ")
console.log("Ordenar nota")
console.log(aula1.ordenaNota('w5'))

console.log(" ")
console.log("Ordenar apellido")
console.log(aula1.ordenaApellido())

console.log(" ")
console.log("Imprimir alumnos")
aula1.imprimirAlumnos()

console.log(" ")
console.log("Edad en año")
console.log(al1.getEdad())

console.log(" ")
console.log("Edad en dias")
console.log(al1.getEdadDias())


console.log(" ")
console.log("Mayores de edad")
console.log(aula1.mayoresEdad())


console.log(" ")
console.log("Menores de edad")
console.log(aula1.menoresEdad())

