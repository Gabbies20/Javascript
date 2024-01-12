datos = prompt("Introduazca su nombre, profesión y edad separado por comas")


indiceEdad = datos.lastIndexOf(",") + 1;
edad = datos.substring(indiceEdad, datos.length)

alert(edad)