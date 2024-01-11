/**
 * Crear   un   formulario   con   los   botones   de   opción   que   representan   diferentes   colores. Utilice   el   atributo   id   para   cada   botón   de   radio.   Cambiar   el   fondo   del   formulario   al   color seleccionado.
 * 
 * window.addEventListener('load',()=>{
    let cAmarillo = document.getElementById('amarillo');
    let cVerde = document.getElementById('verde');
    let cAzul = document.getElementById('azul');
    let cNaranja = document.getElementById('naranja');

    if(cAmarillo){
        cAmarillo.style.backgroundColor('yellow');
    }

});
 */



window.addEventListener('load', () => {
    function cambiarColor(color) {
        let formulario = document.getElementById('miFormulario')
        formulario.style.backgroundColor = color;
    }

    document.getElementById('amarillo').addEventListener('click', () => cambiarColor('yellow'));
    document.getElementById('verde').addEventListener('click', () => cambiarColor('green'));
    document.getElementById('azul').addEventListener('click', () => cambiarColor('blue'));
    document.getElementById('naranja').addEventListener('click', () => cambiarColor('orange'));

    // Agregar evento de clic para el botón de reseteo
    document.getElementById('resetBtn').addEventListener('click', () => {
        // Mostrar confirmación antes de resetear el formulario
        if (confirm('¿Estás seguro de que quieres resetear el formulario?')) {
            document.getElementById('miFormulario').reset();
            document.body.style.backgroundColor = ''; // Restablecer el color de fondo
        }
    });

});
