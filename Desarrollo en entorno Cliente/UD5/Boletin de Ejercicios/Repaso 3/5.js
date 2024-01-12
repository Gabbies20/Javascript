window.addEventListener("load",inicio)

function inicio(){

    texto = document.getElementById("texto")
    texto.setAttribute('maxlength','145')
    boton = document.getElementById("boton")
    
    texto.addEventListener("keydown",validarFormulario)

    function validarFormulario(){
        caracteresRestantes = 145 - texto.value.length
        
        document.getElementById("teclasPulsadas").innerHTML = "Caracteres restantes: " + caracteresRestantes


        contenidoTexto = texto.value
        expTexto = new RegExp(/^([a-z]|[A-Z]|[áÁ]|[éÉ]|[íÍ]|[óÓ]|[úÚ]|[0-9]|\s){0,145}$/)

        if(expTexto.test(contenidoTexto)){
            validaCaracteres = document.getElementById("validaCaracteres").innerHTML=""
            boton.disabled = false
        }else {
            validaCaracteres = document.getElementById("validaCaracteres").innerHTML="Caracteres inválidos"
            boton.disabled = true
        }



    }

}