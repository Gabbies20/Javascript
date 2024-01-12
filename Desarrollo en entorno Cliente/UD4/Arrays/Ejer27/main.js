//Persona
//p1 = new Persona('Pepe','Antonio','w5','1994-09-24')


//Clase Alumno
notas = new Map([['DWC',6],['DWS',7],['DAW',7],['DI',5]])
notas1 = new Map([['DWC',8],['DWS',5],['DAW',2],['DI',10]])

al1 = new Alumno('Jose','Iglesias','w7','1990-09-24','DAW',notas1)
al2 = new Alumno('Pepe','Antonio','w5','1994-09-24','DAW',notas)



console.log(al1.imprimirAlumno())
console.log(al1.notaMedia())
console.log(al1.mejorNota())

//Clase Aula

alumnos = [al1, al2]

aula1 = new Aula(alumnos)

console.log(aula1)

console.log("BuscarDNI")
console.log(aula1.buscarDni('w5'))

console.log(" ")
console.log("Ordenar nota")
console.log(aula1.ordenaNota('w5'))

console.log(" ")
console.log("Ordenar apellido")

console.log(aula1.ordenaApellido())

aula1.imprimirAlumnos()
