arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
/**
 * callback: Es una función que se ejecuta en cada elemento del arreglo. Esta función toma dos argumentos:

accumulator: Es el valor acumulado hasta el momento.
currentValue: Es el valor del elemento actual que se está procesando.
index (opcional): Es el índice del elemento actual.
array (opcional): Es el arreglo en el que se está llamando a reduce().
initialValue (opcional): Es un valor inicial que se utiliza como el valor inicial del acumulador en la primera llamada a la función de reducción. Si no se proporciona initialValue, se toma el primer elemento del arreglo como valor inicial y la función se salta el primer elemento al comenzar la iteración.

El valor devuelto por reduce() es el resultado de aplicar la función de reducción a todos los elementos del arreglo.

Aquí tienes un ejemplo simple de cómo usar reduce() para sumar todos los elementos de un arreglo:

javascript
Copy code
const arreglo = [1, 2, 3, 4, 5];
const suma = arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); // Muestra 15
En este ejemplo, reduce() se utiliza para sumar todos los elementos del arreglo arreglo. La función de reducción recibe dos argumentos, acumulador y valorActual, y los suma. El valor inicial es 0, por lo que la suma comienza desde cero y se acumulan todos los valores del arreglo, dando como resultado 15.
 */

const arreglo = [1, 2, 3, 4, 5];
const suma = arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); // Muestra 15


/**
 * En este ejemplo, reduce() se utiliza para sumar todos los elementos del arreglo arreglo. La función de reducción recibe dos argumentos, acumulador y valorActual, y los suma. El valor inicial es 0, por lo que la suma comienza desde cero y se acumulan todos los valores del arreglo, dando como resultado 15.
 */