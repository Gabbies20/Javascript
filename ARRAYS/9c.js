/**
 Escribe una función llamada uneArrays que acepte un número variable de parámetros (cada uno de ellos será un array) y devuelva un nuevo array con todos los parámetros concatenados
 */

 function uneArrays(...arrays){
    var nuevo = [];
    
    return nuevo.concat(...arrays);
 }

 console.log(uneArrays([1],[4,5,6],[10,45,88]))
