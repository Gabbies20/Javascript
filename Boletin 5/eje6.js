/**
 * Crear   un   formulario   que   utiliza   un   campo   de   entrada   de   texto, que   pida   al   usuario   que escriba   su   nombre   en   letras   mayúsculas.   El   botón   de   envío   será   una   imagen.   Validar que   el   formulario   no   está   vacío   y   que   el   usuario   ha   escrito   su   nombre   sólo   con   letras mayúsculas. Envíe el formulario a un programa de servidor si es correcto.
 */

window.addEventListener('load', () => {
    document.getElementById('miFormulario').addEventListener('submit', () => {
        //event.preventDefault(); // Evitar el envío del formulario por defecto

        let nombre = document.getElementById('nombre').value;
        let nombreCorrecto = nombre.toUpperCase();

        if (nombre.length >= 1) {
            if (nombre !== nombreCorrecto) {
                alert('El nombre debe estar escrito en mayúsculas.');
            } else {
                // Aquí puedes enviar el formulario al servidor si es correcto
                alert('Formulario enviado correctamente.');
                // Puedes agregar una llamada AJAX o cualquier otra lógica de envío aquí.
            }
        } else{
            alert('El campo está vacío, debe escribir su nombre.');
        }
    });
});
