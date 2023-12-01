
window.addEventListener("load",inicio)

function inicio(){

    //Textarea
    texto = document.getElementById("texto")

    // Llamaremos al evento por cada caracter permitido
    for(i = 0; i <  145 - texto.value.length; i++){
        texto.addEventListener("keypress", validaFormulario)
    }

    // Muestra el numero de veces que una tecla es pulsada
    teclasPulsadas = document.getElementById("teclasPulsadas")

    // Muestra si hay caracteres no permitidos
    validaCaracteres = document.getElementById("validaCaracteres")

    function validaFormulario(){

        // Numero de veces que una tecla es pulsada
        contador =145 - texto.value.length

        // Contenido del textarea
        valorTexto = texto.value

        // Validacion del textarea
        expTexto = new RegExp('^([a-z]|[A-Z]|[0-9]){0,145}$')

        // Devuelve true o false en dependencia de si el texto es valido o no
        textoValidado = expTexto.test(valorTexto)

        teclasPulsadas.innerHTML = "Caracteres restantes: " + contador

        // Si se llega al limite de caracteres restantes muestra un mensaje informandolo
        if (contador <= 0){
            teclasPulsadas.innerHTML = "Límite alcanzado"
        }

        // Si se encuentra algun caracter inválido se informa
        if (!textoValidado){
            validaCaracteres.innerHTML = "ERROR... Solo se permiten caracteres alfanuméricos"
        }else{
            validaCaracteres.innerHTML = ""
        }
        
       
    }
}