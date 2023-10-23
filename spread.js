/**
 * DESCOMPONER UN ARREGLO:
 * Puedes utilizar el operador de propagación para descomponer elementos de un arreglo en elementos individuales. Esto es útil para pasar elementos de un arreglo como argumentos a una función o combinar varios arreglos en uno solo. Aquí tienes un ejemplo:
 */
const numeros = [1, 2, 3];
console.log(...numeros); // Muestra: 1 2 3


/**
 * CREAR UNA COPIA DE UN ARREGLO:
 * Puedes utilizar el operador de propagación para crear una copia superficial de un arreglo. Esto es útil cuando quieres duplicar un arreglo sin modificar el original:
 */
const original = [1,2,3];
const copia = [...original];
copia.push(4); //añadimos 4 a nuetsro arreglo copia.
console.log(original);
console.log(copia);


/**
 * COMBINAR ARREGLOS:
 * EL operador de propagación puede combinarse con otros arreglos para crear uno nuevo que incluya todos los elementos. Esto es útil para fusionar varios arreglos en uno solo.
 */
const arreglo1 = [1,2,3];
const arreglo2 = [4,5,6];

const arregloCombinado = [...arreglo1,...arreglo2];
console.log(arregloCombinado);
