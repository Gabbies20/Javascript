

    function iniciarArrastre(event, idElemento) {
        event.dataTransfer.setData("text/plain", idElemento);
    }

    function permitirSoltar(event) {
        event.preventDefault();
    }

    function soltar(event, idContenedor) {
        event.preventDefault();
        var idElemento = event.dataTransfer.getData("text/plain");
        var elementoArrastrado = document.getElementById(idElemento);
        var contenedorDestino = document.getElementById(idContenedor);
        contenedorDestino.appendChild(elementoArrastrado);
    }

    function eliminarElemento(event) {
        event.preventDefault();
        var idElemento = event.dataTransfer.getData("text/plain");
        var elementoEliminado = document.getElementById(idElemento);
        elementoEliminado.parentNode.removeChild(elementoEliminado);
    }

