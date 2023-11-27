/**
 * Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas. Esta entrada de datos se repetirá hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos en un array bidimensional.
Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad. ¿cómo podríamos optimizar la búsqueda? 

 * 
 * 
 * Implementar el ejercicio 20 y 21(sólo imprimir los datos), usando objetos. (P.e. clase Persona) 
 */


var p1 = new Persona('Gabriela', 'Pinzón Ochoa', '77978285M', '23/02/1994');
var p2 = new Persona('Mnuel', 'Pinzón Ochoa', '77978285G', '23/02/1994');
var p3 = new Persona('Irene', 'Pinzón Ochoa', '77978285R', '23/02/1994');
var p4 = new Persona('Sofía', 'Pinzón Ochoa', '77978285P', '23/02/1994');
var p5 = new Persona('Lola', 'Pinzón Ochoa', '77978285I', '23/02/1994');
console.log(p1.imprimirDatos());


var lista = [p1, p2, p3, p4, p5]
//document.write(lista);

/**Este código utiliza map para aplicar el método imprimirDatos a cada persona en la lista y luego usa join('<br>') para concatenar los resultados con saltos de línea (<br>). Ten en cuenta que este código asume que la clase Persona tiene el método imprimirDatos.
 * 
 * 
 * MAP CREA UN NUEVO ARRAY:
document.write(lista.map(persona => persona.imprimirDatos()).join('<br>'));


ó   

const contenedor = document.getElementById('miContenedor');

lista.forEach(persona => {
    const parrafo = document.createElement('p');
    parrafo.innerHTML = persona.imprimirDatos();

    contenedor.appendChild(parrafo);
});

forEach itera sobre los elementos de un array y ejecuta una función de devolución de llamada para cada elemento.
forEach en sí no devuelve un nuevo array, por lo que no puedes encadenar join('<br>') después de forEach como lo estás intentando aquí. Además, forEach devuelve undefined, por lo que join no funcionará en undefined.
La función forEach en JavaScript no devuelve ningún valor (undefined). Su propósito principal es iterar sobre cada elemento de un array (o de una estructura iterable) y ejecutar una función de devolución de llamada para cada elemento. A diferencia de métodos como map, filter, y reduce, que crean y devuelven nuevos arrays u objetos, forEach simplemente realiza una acción en cada elemento pero no produce un valor que pueda ser utilizado de manera significativa.
 * 
 */

document.write(lista.forEach(persona => persona.imprimirDatos()).join('<br>'));

