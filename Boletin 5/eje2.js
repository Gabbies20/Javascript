/**
 * Usar JS para mostrar el contenido, en mayúsculas, del formulario anterior en la misma ventana. Modifica el script para mandar los datos a una nueva ventana.
 */

window.addEventListener('load', () => {

    console.log('hola');
    document.getElementById('enviar').addEventListener('click',()=>{
        console.log('chao');
        var nombre = document.getElementById('nombre').value.toUpperCase();
        var apellidos = document.getElementById('apellidos').value.toUpperCase();
        var usuario = document.getElementById('usuario').value.toUpperCase();
        var contrasena = document.getElementById('contrasena').value;
        var diaNac = parseInt(document.getElementById('diaNac').value); // Cambiado a 'diaNac'
        var mesNac = document.getElementById('mesNac').value; // Nuevo campo de mes
        var anioNac = parseInt(document.getElementById('anioNac').value); // Nuevo campo de año
        var sexo = document.getElementById('sexo').value.toUpperCase();
        var movil = document.getElementById('numeroMovil').value;
        var correo = document.getElementById('correo').value.toUpperCase();


        //Vamos a calcular la edad del usuario:
        let mesNacInt = parseInt(mesNac);

        let fechaNac = new Date(anioNac,mesNacInt ,diaNac);
        var fechaActual = new Date();
        var edad = fechaActual.getMilliseconds() - fechaNac.getMilliseconds();
        

        document.getElementById('edadUsuario').value = edad;
        console.log(edad);
        // Construir el resultado en mayúsculas
        var resultado = "Nombre: " + nombre + "<br>" +
        "Apellidos: " + apellidos + "<br>" +
        "Nombre de Usuario: " + usuario + "<br>" +
        "Contraseña: " + contrasena + "<br>" +
        "Fecha de Nacimiento: " + diaNac + "/" + mesNac.toUpperCase() + "/" + anioNac + "<br>" +
        "Sexo: " + sexo + "<br>" +
        "Teléfono Móvil: " + movil + "<br>" +
        "Correo Electrónico: " + correo + '<br>'+
        'LA EDAD ES: ' + edad + fechaActual +fechaNac ;

// Mostrar el resultado en el div resultado
//document.getElementById('resultado').innerHTML = resultado;

// Abrir una nueva ventana y mostrar el resultado
var nuevaVentana = window.open("", "Resultado del Formulario", "width=400,height=400");
//nuevaVentana.document.write(resultado);
//nuevaVEntana.document.body.innerHTML = resultado;
nuevaVentana.document.write(resultado);

});

    });
