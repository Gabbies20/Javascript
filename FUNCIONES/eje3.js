/**
 * Realizar un programa que calcule el número de cifras de un número. Deberá implementarse una función numCifras(numero) que devuelva el número de cifras del mismo. Utiliza el operador spread.
 */

function numCifras(numero) {
    var cifras = numero.toString();
    console.log(cifras.length);
}

numCifras(4569)