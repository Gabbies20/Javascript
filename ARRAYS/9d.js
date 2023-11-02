/**
 * Escribe una función llamada sumaArgPares que sume todos los argumentos pares que se pasen a la función.
 */

function sumaArgPares(){
    var suma = 0;

    for (let i = 0; i < arguments.length; i++) {
      if (i % 2 === 0) { 
        suma += arguments[i];
      }
    }
  
    return suma;
}
console.log(sumaArgPares(1, 2, 3, 4, 5, 6));

    