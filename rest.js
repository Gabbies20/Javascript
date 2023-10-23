function sumarTodos(...números) {
    // "números" es un arreglo que contiene todos los argumentos pasados a la función.
    return números.reduce((total, número) => total + número, 0);
  }
  
  const suma = sumarTodos(1, 2, 3, 4, 5);
  console.log(suma); // Muestra 15

  
  /**
   * En este ejemplo:

Definimos una función llamada sumarTodos con el parámetro rest ...números. Este parámetro recogerá todos los argumentos pasados a la función y los almacenará en un arreglo llamado números.

Luego, llamamos a la función sumarTodos con cinco argumentos: 1, 2, 3, 4 y 5.

Dentro de la función, utilizamos el método reduce() para sumar todos los elementos del arreglo números.

El resultado es que la función suma todos los números pasados como argumentos y devuelve 15. El parámetro rest ...números permite que la función acepte un número variable de argumentos sin tener que definir todos los argumentos individualmente en la lista de parámetros de la función. Esto hace que la función sea más flexible y versátil, especialmente cuando no sabes cuántos argumentos se pasarán de antemano.
   */