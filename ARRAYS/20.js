

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





