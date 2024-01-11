/**
 * Realizar  un   formulario   para   envío   de   SMS   con   una   área   de   texto   de   145 caracteres como máximo, no debe permitir escribir más. Sólo se permiten alfanuméricos y signos de puntuación. Se debe mostrar el número de caracteres permitidos que le quedan al usuario para poder escribir.
 */
window.addEventListener('load',() => {
    document.getElementById('mensaje').addEventListener('keydown',function(){

            var mensaje = document.getElementById('mensaje').value;
            var contador = document.getElementById('contador');
            var caracteresRestantes = 145 - mensaje.length;
            contador.textContent = caracteresRestantes;
    });
})