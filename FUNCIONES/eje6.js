/**
 * Hacer un programa que sume todos los parámetros pasados como argumentos de entrada en la llamada. El número de argumentos de entrada es desconocido.
 */
function sumaParametros(...params) {
    
    var suma = 0;

    for (let index = 0; index < params.length; index++) {
        const parametro = params[index];

        suma += parametro;
    }
    return suma;
}

console.log(sumaParametros(1, 8, 78));