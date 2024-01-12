window.addEventListener("load",inicio)

function inicio(){
    
    formulario = document.getElementById("formulario")
    confirmacion = document.getElementById("confirmacion")
    validaContaseñas = document.getElementById("validaContaseñas")

    // Aplico el evento blur a los elementos del formularios 
    for(i=0; i<formulario.elements.length; i++){
        formulario.elements[i].addEventListener("blur",validaContraseña)
    }


    function validaContraseña(ev){
        
        // Obtengo el valor del elemento actual
        elemento = ev.currentTarget.value

        // Obtengo el valor de las contraseñas
        contraseña1 = document.getElementById("contraseña1")
        contraseña2 = document.getElementById("contraseña2")

        // Si uno de los campos está vacío, mando una alerta y vuelvo el foco sobre el campo
        if(elemento == ""){
            ev.currentTarget.focus()
            confirmacion.innerHTML = "Por favor, introduzca valores en la contraseña"
        }else{

            // Si el campo no está vacío compruebo que las contraseñas sean iguales
            if(contraseña1.value != contraseña2.value){
                validaContaseñas.innerHTML = "Las contraseñas no coinciden"
            }else{
                validaContaseñas.innerHTML = "Las contraseñas coinciden"
            }
            confirmacion.innerHTML = ""
        }




    }

}