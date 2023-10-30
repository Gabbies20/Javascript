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

let tripleAndFilter = (arr) => arr.map((value)=> value * 3).filter((value)=> value % 5 === 0);

console.log(tripleAndFilter([3, 6, 9, 12, 15, 18, 21, 24]));
//En el arreglo [3, 6, 9, 12, 15, 18, 21, 24], después de triplicar los valores, obtenemos [9, 18, 27, 36, 45, 54, 63, 72]. El único valor divisible por 5 en este arreglo es 45, por lo que se muestra en la consola.


//************************************************************************* */
/**
 * Asegúrate de que la función se llama doubleOddNumbers.
 * function doubleOddNumbers(arr){
  return arr.filter(function(val){
    return val % 2 !== 0;
  }).map(function(val){
    return val *2;
  })
}
 */

let doubleOddNumbers = (a) => a.filter((val)=>val % 2 !== 0).map((val)=> val* 2);

console.log(doubleOddNumbers([7,5,9,86,15]));

//**************************************************** */


/**
 * Asegurate de que la funcion se llame bar:
 */

function bar(){
  let txt = '';
  for(let i in arguments){
    txt += arguments[i];
  }
  return txt;
}
console.log(bar('Hola', ' ', 'mundo', '!'));

const resultado = bar('Hola', ' ', 'mundo', '!');
const longitud = resultado.length;

console.log(longitud); // Esto mostrará la longitud de la cadena en la consola
