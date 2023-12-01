
window.addEventListener("load",inicio)

function inicio(){

    texto = document.getElementById("texto")

    texto.addEventListener("keypress", validarComentario)
    teclasPulsadas = document.getElementById("teclasPulsadas")
    validaCaracteres = document.getElementById("validaCaracteres")

    function validarComentario(){
        
        caracteresRestantes = 145 - texto.value.length
        console.log(texto.value.length)

        if (caracteresRestantes >= 0){
            teclasPulsadas.innerHTML = "Caracteres restantes: " + caracteresRestantes
        }

        textoValidar = texto.value
        expTexto = new RegExp('^([a-z]|[A-Z]|[0-9]){0,145}$')

        if (caracteresRestantes <= 0){
            teclasPulsadas.innerHTML = "Límite alcanzado"
        }

        if(!expTexto.test(textoValidar)){
            validaCaracteres.innerHTML = "Solo se admiten caracteres alfanuméricos"
        }else{
            validaCaracteres.innerHTML = ""
        }
    }
}