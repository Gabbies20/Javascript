window.addEventListener('load', inicio);

function inicio() {
    var div = document.getElementById('contenedor');

    var h1 = document.createElement('h1');
    var text1 = document.createTextNode('Cuestionario Online:');
    h1.appendChild(text1);
    div.appendChild(h1);

    // Pregunta 1
    var pregunta1 = document.createElement('h2');
    var textoPregunta1 = document.createTextNode('Pregunta 1: ¿Cuál es la capital de Francia?');
    pregunta1.appendChild(textoPregunta1);
    div.appendChild(pregunta1);

    var opciones1 = ['Madrid', 'París', 'Berlín', 'Roma'];
    agregarOpciones('q1', opciones1, div);

    // Pregunta 2
    var pregunta2 = document.createElement('h2');
    var textoPregunta2 = document.createTextNode('Pregunta 2: ¿Cuál es el color del cielo en un día despejado?');
    pregunta2.appendChild(textoPregunta2);
    div.appendChild(pregunta2);

    var opciones2 = ['Rojo', 'Azul', 'Verde', 'Amarillo'];
    agregarOpciones('q2', opciones2, div);

    // Botón de calificación
    var botonCalificar = document.createElement('button');
    botonCalificar.innerHTML = 'Calificar';
    botonCalificar.addEventListener('click', calificarExamen);
    div.appendChild(botonCalificar);

    // Campo de texto para mostrar el resultado
    var resultadoTexto = document.createElement('textarea');
    resultadoTexto.id = 'resultado';
    resultadoTexto.rows = 4;
    resultadoTexto.cols = 50;
    resultadoTexto.disabled = true;
    div.appendChild(resultadoTexto);

    // Agregar eventos de ratón a las respuestas correctas
    agregarEventoRatonRespuesta('París', 'Respuesta correcta para la Pregunta 1');
    agregarEventoRatonRespuesta('Azul', 'Respuesta correcta para la Pregunta 2');
}

function agregarOpciones(name, opciones, contenedor) {
    for (var i = 0; i < opciones.length; i++) {
        var label = document.createElement('label');
        var input = document.createElement('input');
        input.type = 'radio';
        input.name = name;
        input.value = opciones[i];

        // Agregar eventos de ratón a las respuestas correctas
        if (opciones[i] === 'París' || opciones[i] === 'Azul') {
            agregarEventoRatonRespuesta(opciones[i], 'Respuesta correcta!');
        }

        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + opciones[i]));
        contenedor.appendChild(label);
        contenedor.appendChild(document.createElement('br'));
    }
}

function calificarExamen() {
    var resultadoTexto = document.getElementById('resultado');
    resultadoTexto.value = ''; // Limpiar resultados anteriores

    var respuestasCorrectas = ['París', 'Azul']; // Respuestas correctas para las preguntas

    // Calificar y mostrar el resultado
    var respuesta1 = obtenerRespuesta('q1');
    var respuesta2 = obtenerRespuesta('q2');

    if (respuesta1 === respuestasCorrectas[0]) {
        resultadoTexto.value += '¡Respuesta 1 correcta!\n';
    } else {
        resultadoTexto.value += 'Respuesta 1 incorrecta. La respuesta correcta es París.\n';
    }

    if (respuesta2 === respuestasCorrectas[1]) {
        resultadoTexto.value += '¡Respuesta 2 correcta!';
    } else {
        resultadoTexto.value += 'Respuesta 2 incorrecta. La respuesta correcta es Azul.';
    }
}

function obtenerRespuesta(name) {
    var opciones = document.getElementsByName(name);
    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            return opciones[i].value;
        }
    }
    return null; // No se seleccionó ninguna respuesta
}

function agregarEventoRatonRespuesta(respuesta, mensaje) {
    var respuestasElementos = document.querySelectorAll(`input[value="${respuesta}"]`);

    respuestasElementos.forEach(function (respuestaElemento) {
        respuestaElemento.addEventListener('mouseover', function () {
            var mensajeRespuesta = document.getElementById('mensajeRespuesta');
            mensajeRespuesta.innerHTML = mensaje;
        });

        respuestaElemento.addEventListener('mouseout', function () {
            var mensajeRespuesta = document.getElementById('mensajeRespuesta');
            mensajeRespuesta.innerHTML = '';
        });
    });
}

