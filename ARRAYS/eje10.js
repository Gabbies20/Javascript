/**
 * Refactoriza el siguiente código usando funciones flecha.
 * 
 * function tripleAndFilter(arr){
    return arr.map(function(value){
            return value * 3;
         }).filter(function(value){
           return value % 5 === 0;
      })
}

 */

let tripleAndFilter = (arr) => {
    return arr.map((value)=> value * 3).filter((value)=> value % 5 === 0
    );
}
console.log(tripleAndFilter([3, 6, 9, 12, 15, 18, 21, 24]));
//En el arreglo [3, 6, 9, 12, 15, 18, 21, 24], después de triplicar los valores, obtenemos [9, 18, 27, 36, 45, 54, 63, 72]. El único valor divisible por 5 en este arreglo es 45, por lo que se muestra en la consola.

/**
 * 
 */
function doubleOddNumbers(arr){
  return arr.filter(function(val){
    return val % 2 !== 0;
  }).map(function(val){
    return val *2;
  })
}
