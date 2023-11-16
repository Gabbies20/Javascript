/**
 * 

var a = obtenerDatos();
document.write(a + '<br>');

insertarApellido();

function insertarApellido() {
    
    var apellidoABuscar = prompt('Ingrese los apellidos que desea buscar:');

    var resultadosBusqueda = buscarApellido(apellidoABuscar);

    if (resultadosBusqueda) {
        console.log('El apellido que busca pertenece al usuario:');
        console.log(resultadosBusqueda);
    } else {
        console.log('No existe ningún usuario con ese apellido.');
    }
}


function buscarApellido(apellido) {

    var resultado = a.find(function (elemento) {
        return elemento.length >= 2 && elemento[1] === apellido;
    });

    return resultado;
}
 */

//DEclaración de una matriz:
var matriz = [[100,200,300],[400,500,600]];


//Leer los valores de un arreglo:
console.log(`Elemento [0][1] = ${matriz[0][1]}`);



//Nro filas:
console.log(matriz.length);

//Nro columnas:
console.log(matriz[0].length);



//Recorrer un matriz;
for(let fila = 0; fila < matriz.length; fila++ ){
    //Recorrer columnas:
    for(let col = 0; col < matriz[fila].length; col++){
        console.log(matriz[fila][col]);
    }
}

console.log(matriz);