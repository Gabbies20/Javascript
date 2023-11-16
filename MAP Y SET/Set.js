/**
 * SET:Permiten almacenar datos, sin admitir valores duplicados, eliminando valores duplicados.
 */


//Formas de añadir elementos a un Set:
const lista = new Set();
lista.add(8);
lista.add(6);

console.log(lista);
console.log(lista.has(4));  /// ->False




const a_set = new Set();

a_set.add(23).add(2).add(94);

console.log(a_set);

//A partir de un array:
const lista2 = new Set([5,6,4,2,3,4,8,5,6,9,8,8,7,4,5]);
console.log(lista2);

//A partir de un texto:

const texto = new Set('Conjunto');
console.log(texto);

//Si quiero añadir una cadena:
const cadena = new Set();
cadena.add('Gabriela');
console.log(cadena);

/**
 * Propiedades y métodos:
 *  lista.size.
 * 
 * 
 * lista.delete(elementoaborrar);
 * lista.clear();
 * 
 * lista.has(7)  ->Preguntar si contiene ese elemento.    
 */


//Convertir conjuntos en arrays:
const set_a_array = new Set ([1,2,3,4,5,5,6,8,7,8]);
const array = [...set_a_array];
console.log(array);

//Recorrer conjuntos:
for (let numero of set_a_array){
    console.log(numero);
}