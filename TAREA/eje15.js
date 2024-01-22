window.addEventListener("load", function() {
    var contenedorOrigen = document.getElementById("contenedorOrigen");
    var contenedorDestino = document.getElementById("contenedorDestino");
    var elementoOrigen = document.getElementById("elementoOrigen");

    contenedorOrigen.addEventListener("mousedown", function(event) {
        iniciarCopia(event, elementoOrigen);
    });

    contenedorDestino.addEventListener("mouseup", pegarCopia);

    function iniciarCopia(event, elemento) {
        event.preventDefault();
        var copiaElemento = elemento.cloneNode(true);

        // Establecer el nuevo ID para evitar duplicados
        copiaElemento.id = "elementoCopia";

        // Añadir la copia al contenedor de origen
        contenedorOrigen.appendChild(copiaElemento);

        // Iniciar el seguimiento de la copia
        document.addEventListener("mousemove", moverCopia);
    }

    function moverCopia(event) {
        var copiaElemento = document.getElementById("elementoCopia");
        copiaElemento.style.left = event.clientX - copiaElemento.clientWidth / 2 + "px";
        copiaElemento.style.top = event.clientY - copiaElemento.clientHeight / 2 + "px";
    }

    function pegarCopia() {
        document.removeEventListener("mousemove", moverCopia);
        var copiaElemento = document.getElementById("elementoCopia");

        if (copiaElemento) {
            copiaElemento.id = ""; // Eliminar el ID para evitar conflictos

            // Ajustar posición relativa al contenedor de destino
            var rect = contenedorDestino.getBoundingClientRect();
            copiaElemento.style.left = event.clientX - rect.left - copiaElemento.clientWidth / 2 + "px";
            copiaElemento.style.top = event.clientY - rect.top - copiaElemento.clientHeight / 2 + "px";

            contenedorDestino.appendChild(copiaElemento);
        }
    }
});