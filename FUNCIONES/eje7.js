/**
 * Escribe una función que reciba como argumento de entrada un array de números y averigue utilizando métodos del objeto Math cuál es el menor y el mayor de ellos.
 */

function menorMayor(array){
    var mayor = Math.max(...array);
    var menor = Math.min(...array);

    return `EL mayor de los elementos del array es ${mayor} y el menor es ${menor}`
}

console.log(menorMayor([5,8,2,1,89,45,10]))