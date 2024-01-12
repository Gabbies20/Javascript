window.addEventListener('load', () => {
    document.getElementById('enviar').addEventListener('click', () => {
        convertirAMinusculas();
    });

    function convertirAMinusculas() {
        const inputTexto = document.getElementById('miTexto');
        const resultadoElemento = document.getElementById('resultado');

        if (inputTexto.value.trim() !== '') {
            //inputTexto.value = inputTexto.value.toLowerCase();
            const resultado = inputTexto.value.toLowerCase();
            resultadoElemento.innerText = 'Texto convertido: ' + resultado;

        } else {
            alert('El texto está vacío.');
            resultadoElemento.innerText = ''; // Limpiar el resultado si el texto está vacío
        }
    }
});
