/**
 *Crea un formulario con un campo de texto para introducir el código de un producto. El código debe cumplir obligatoriamente el siguiente formato: tres letras, guión y de 1 a 5 números (ej: ASX-23). Si el campo no es correcto, debe mostrar al salir del campo un mensaje que informe al usuario.
El formulario también debe tener un botón para ser enviado, pero este no se enviará si el código no se ha introducido correctamente. Además en el momento en que se envía el formulario, el código debe ser almacenado en el navegador de forma permanente sin necesidad de que pase por el servidor.


/**
 *Crea un formulario con un campo de texto para introducir el código de un producto. El código debe cumplir obligatoriamente el siguiente formato: tres letras, guión y de 1 a 5 números (ej: ASX-23). Si el campo no es correcto, debe mostrar al salir del campo un mensaje que informe al usuario.
El formulario también debe tener un botón para ser enviado, pero este no se enviará si el código no se ha introducido correctamente. Además en el momento en que se envía el formulario, el código debe ser almacenado en el navegador de forma permanente sin necesidad de que pase por el servidor.


window.addEventListener('load', iniciar);

function iniciar() {
    let datos = document.getElementById('codigoProducto');
    let boton = document.getElementById('boton');

    datos.addEventListener('blur', function () {
        let regex = /^[A-Z]{3}-[0-9]{1,5}$/;

        if (regex.test(datos.value)) {
            // Código correcto
        } else {
            alert('No está bien escrito.');
        }
    });

    boton.addEventListener('submit', function (event) {
        let regex = /^[A-Z]{3}-[0-9]{1,5}$/;

        if (!regex.test(datos.value)) {
            alert('El código no es válido. Por favor, corrige el formato antes de enviar el formulario.');
            event.preventDefault(); // Evitar que el formulario se envíe si el código no es válido
        } else {
            // Aquí puedes almacenar el código en el navegador de forma permanente (ej. usando cookies o localStorage)
            document.cookie = `codigoProducto=${datos.value}; path=/; domain=localhost`;

            var miCookie = document.cookie;
            alert(miCookie);
        }
    });
}
*/



window.addEventListener('load', iniciar);

function iniciar() {
    let datos = document.getElementById('codigoProducto');
    let boton = document.getElementById('boton');

    datos.addEventListener('blur', function () {
        let regex = /^[A-Z]{3}-[0-9]{1,5}$/;

        if (regex.test(datos.value)) {
            // Código correcto
        } else {
            alert('No está bien escrito.');
        }
    });

    boton.addEventListener('click', function (event) {
        let regex = /^[A-Z]{3}-[0-9]{1,5}$/;

        if (!regex.test(datos.value)) {
            alert('El código no es válido. Por favor, corrige el formato antes de enviar el formulario.');
            event.preventDefault(); // Evitar que el formulario se envíe si el código no es válido
        } else {
            // Aquí puedes almacenar el código en el navegador de forma permanente (ej. usando cookies o localStorage)
            document.cookie = `codigoProducto=${datos.value}; max-age=31536000;  path=/; domain=localhost`;
            console.log(document.cookie);
        }
    });
}
