window.addEventListener("load",inicio)

function inicio(){

    formulario = document.getElementById("formulario")

    for(i = 0 ; i < formulario.elements.length; i++){
        formulario.elements[i].addEventListener("blur", validaContrasenia)
    }


    function validaContrasenia(ev){
        elemento = ev.currentTarget
        
        contrasenia1= document.getElementById("contraseña1")
        contrasenia2= document.getElementById("contraseña2")

        if(elemento.value == ""){
            elemento.focus()
            document.getElementById("confirmacion").innerHTML="Contraseña vacia"
        }else{
            document.getElementById("confirmacion").innerHTML=""

            if((contrasenia1.value == contrasenia2.value)){
                document.getElementById("confirmacion").innerHTML=""
            }else{
                document.getElementById("confirmacion").innerHTML="Las contraseñas no coinciden"
            }
        }


    }

}