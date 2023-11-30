/**
 * Usar JS para mostrar el contenido, en mayúsculas, del formulario anterior en la misma ventana. Modifica el script para mandar los datos a una nueva ventana.
 */

window.addEventListener('',inicializar);


function inicializar(){
    var formulario = document.getElementById('miFormulario');
    for(var i = 0; i < formulario.nextElementSibling.clientHeight; i++){
        console.log(formulario.elements[i].value = "");

    }
}
