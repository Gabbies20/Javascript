/**
 * Escribe una función llamada elMenor que acepte un número variable de parámetros y devuelva el parámetro de menor valor pasado a la función,
 */

function elMenor(...parametros){

    var menor = Math.min(...parametros);
    return `El parametro de menor valor es ${menor}`;
}

console.log(elMenor(7,8,9,5,245,45))