
//Clase Alumno
notas = new Map([['DWC',6],['DWS',7],['DAW',7],['DI',5]])
notas1 = new Map([['DWC',8],['DWS',5],['DAW',10],['DI',10]])

al1 = new Alumno('Jose','Iglesias','w7','1990-09-24','DAW',notas1)
al2 = new Alumno('Pepe','Antonio','w5','2010-09-24','DAW',notas)

console.log("Imprimir alumnos")
console.log(al1.imprimirAlumno())

console.log(" ")
console.log("Nota media")
console.log(al1.notaMedia())


console.log(" ")
console.log("Nota más alta")
console.log(al1.mejorNota())


console.log(" ")
console.log("Años de un alumno")
console.log(al1.getAños())



//Clase Aula

alumnos = [
    al1,
    al2,

]

aula1 = new Aula(alumnos)

console.log(" ")
console.log("Buscar por dni")
console.log(aula1.buscaDNI("w5"))


console.log(" ")
console.log("Ordenar por notas")
console.log(aula1.ordenarNota("w7"))


console.log(" ")
console.log("Ordenar por apellidos")
console.log(aula1.ordenaApellido())


console.log(" ")
console.log("Imprimir alumnos")
console.log(aula1.imprimirAlumnos())


console.log(" ")
console.log("Mayores de edad")
console.log(aula1.mayoresEdad())


console.log(" ")
console.log("Menores de edad")
console.log(aula1.menoresEdad())