/**
 * Realizar   un   examen   tipo   test   online   de   2  preguntas con 4 respuestas (sólo   se   puede seleccionar   1).   Cuando   el   usuario   seleccione   una respuesta,  hacerle   saber   si   es correcta o incorrecta y mostrar la respuesta correcta en un campo de texto aparte.
 */

// script.js


//DOMContentLoad: se dispara cuando el document HTML ha saido completamente cargado y analizado, pero sin esperar a que se ecarguen imágenes y otros recursos externos. Se dispara antes que el load.

//'load': este evento se dispara cuando todo el contenido de la página, inlcuidos os recursos externos como imágenes y scripts, ha sido completamente cargado.

//load
document.addEventListener('DOMContentLoaded', function() {
    // Este código se ejecutará cuando el DOM esté completamente cargado

    // Obtén el formulario por su ID
    var formulario = document.getElementById('miFormulario');
    var rc_p1 = '';


    // Verifica si el formulario existe antes de intentar acceder a sus elementos
    if (formulario) {
        // Obtén todas las etiquetas de input dentro del formulario
        var elementos = formulario.getElementsByTagName('form');

        // Recorre cada etiqueta de que contiene mi variable elementos:
        for (var i = 0; i < elementos.length; i++) {
            // Realiza alguna acción con cada etiqueta de input (por ejemplo, console.log)
            console.log(elementos[i]);
        }
    } else {
        console.error('El formulario no fue encontrado.');
    }
});
