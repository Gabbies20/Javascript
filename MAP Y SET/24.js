/**
 * Escribe una función a la que se le pase como parámetro un array y devuelva ese mismo array después de eliminar los elementos repetidos.
 */

function eje24(array){
    var conjunto = new Set(array);
    return [...conjunto];
}

console.log(eje24([1,2,3,4,4,6,6,4,5,6,3,7,85,96,85]));



//O:

function eliminarRepetidos(array) {
    // Utilizar un Set para eliminar duplicados y luego convertirlo de nuevo a un array
    const arraySinRepetidos = [...new Set(array)];
    return arraySinRepetidos;
  }
  
  // Ejemplo de uso
  const arrayOriginal = [1, 2, 3, 4, 1, 2, 5];
  const arraySinRepetidos = eliminarRepetidos(arrayOriginal);
  
  console.log(arraySinRepetidos); // Salida: [1, 2, 3, 4, 5]
  