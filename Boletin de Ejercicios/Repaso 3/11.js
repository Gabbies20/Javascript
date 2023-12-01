window.addEventListener("load",inicio)

function inicio(){

    formulario = document.getElementById("formulario")

    for(i = 0; i < formulario.elements.length; i++){
        formulario.elements[i].addEventListener('blur',validarContraseña)
    }

    function validarContraseña(ev){
        if(ev.currentTarget.value == ""){
            document.getElementById("confirmacion").innerHTML = "Rellene la contraseña"  
            ev.currentTarget.focus()
        }else{
            document.getElementById("confirmacion").innerHTML = ""
        }

        console.log(ev.currentTarget.value)
    }

}