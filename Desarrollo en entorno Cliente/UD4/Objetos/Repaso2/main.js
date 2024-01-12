//Clase Alumno
notas = new Map([['DWC',6],['DWS',7],['DAW',7],['DI',5]])
notas1 = new Map([['DWC',8],['DWS',5],['DAW',10],['DI',10]])

al1 = new Alumno('Jose','Iglesias','w7','2011-09-24','DAW',notas1)
al2 = new Alumno('Pepe','Antonio','w5','2010-09-24','DAW',notas)


console.log(al1.imprimirAlumno())


console.log(al1.mediaNotas())

console.log(al1.mejorNota())

console.log(al1.mostrarAños())


//Clase Aula

alumnos = [al1,al2]

aula1 = new Aula(alumnos)

console.log(aula1.buscaDNI("w7"))

console.log(aula1.ordenarNota("w7"))

console.log(aula1.ordenaApellido())


aula1.imprimirAlumnos()

console.log(aula1.mayoresEdad())

console.log(aula1.menoresEdad())