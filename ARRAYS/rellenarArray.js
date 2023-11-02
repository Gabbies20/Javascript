/**
 * RELLENAR ARRAY Y ACCEDER A UN ELEMENTO CONCRETO DE MI ARRAY:
 */

var array = [];

for (let i = 1; i <= 10; i++) {
    
    if (i === 3) {
        array.push("Hola");
    } else {
        array.push(i);
    }
}
console.log(array);
console.log(array[2])