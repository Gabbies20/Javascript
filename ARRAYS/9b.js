/**
 * Escribe una función llamada colocaEnMedio que acepte como parámetros dos arrays y devuelva el primer array con todos los valores del segundo array colocados en el centro del primer array. 
 */

function colocaEnMedio(a1,a2){
    var medio = a1.length/2;
    a1.splice(medio , 0 ,...a2);
    return a1;
}

console.log(colocaEnMedio([1,2,6,7],[3,4,5]))