window.addEventListener('load',() =>{

    var miElemento = document.getElementById("miElemento");
    var posicionMouse = document.getElementById("posicionMouse");

    // Agregar un event listener para el evento mousemove
    miElemento.addEventListener("mousemove", function(event) {
        // Obtener las coordenadas del mouse
        var x = event.clientX;
        var y = event.clientY;

        // Actualizar el contenido del elemento que muestra la posición
        posicionMouse.textContent = "Posición del mouse: (" + x + ", " + y + ")";

        // Cambiar el color de fondo cuando el mouse se mueve sobre el elemento
        miElemento.style.backgroundColor = "lightblue";
    });

    // Restaurar el color original y limpiar las coordenadas cuando el mouse sale del elemento
    miElemento.addEventListener("mouseleave", function(event) {
        miElemento.style.backgroundColor = "lightgreen";
        posicionMouse.textContent = "Posición del mouse: ";
    });
});
