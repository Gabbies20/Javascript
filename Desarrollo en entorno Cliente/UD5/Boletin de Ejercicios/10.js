window.addEventListener("load",inicio)

function inicio(){
    //Ejercicio 9
    formulario = document.getElementById("contacto")
    boton = document.getElementById("boton")
    boton.disabled = true

    for(i = 0; i < formulario.elements.length; i++){
        formulario.elements[i].addEventListener("blur",validar)
    }


    function validar(ev){
      


        formulario_valido = false

     
         // EJERCICIO 10
        elemento = ev.currentTarget.type
        idElemento =  ev.currentTarget.id
        nombreElemento = ev.currentTarget.id + 1
        valorElemento = ev.currentTarget.value

        contraseña = document.getElementById("contraseña").value
        confirmar_contraseña = document.getElementById("confirmar_contraseña").value
        
        if(elemento == "text"){
            if (valorElemento.length > 5){
                document.getElementById(nombreElemento).innerHTML = "El elemento debe ser menor a 5 caracteres"
                formulario_valido = false
            }else{
                document.getElementById(nombreElemento).innerHTML = " "
                formulario_valido = true
            }
        }

        if(elemento =="password"){
            if(contraseña != "" && confirmar_contraseña != ""){
                if(contraseña == confirmar_contraseña){
                    document.getElementById(nombreElemento).innerHTML = "Las contraseñas coinciden"
                    formulario_valido = true
                    
                }else{
                    document.getElementById(nombreElemento).innerHTML = "Las contraseñas no coinciden"
                    formulario_valido = false
                }
            }
        }

        if(elemento =="number"){
            if(idElemento =="dia"){

                if(valorElemento > 31 || valorElemento < 1){
                    document.getElementById(nombreElemento).innerHTML = "Dia incorrecto"
                    formulario_valido = false
                }else{
                    document.getElementById(nombreElemento).innerHTML = " "
                    formulario_valido = true
                }
            } else if(idElemento =="año"){

                if(valorElemento > 12 || valorElemento < 1){
                    document.getElementById(nombreElemento).innerHTML = "Año incorrecto"
                    formulario_valido = false
                }else{
                    document.getElementById(nombreElemento).innerHTML = " "
                    formulario_valido = true
                }
            }  else if(idElemento =="telefono"){

                if(valorElemento.length != 9){
                    document.getElementById(nombreElemento).innerHTML = "Teléfono Incorrecto"
                    formulario_valido = false
                }else{
                    document.getElementById(nombreElemento).innerHTML = " "
                    formulario_valido = true
                }
            } 
            
        }

        if(formulario_valido){
            boton.disabled = false
        }else{
            boton.disabled = true
        }
      
    }
}
