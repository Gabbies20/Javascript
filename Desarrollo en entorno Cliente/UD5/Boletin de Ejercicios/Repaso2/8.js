window.addEventListener("load",inicio)

function inicio(){
    formulario = document.getElementById("contacto")
    boton = document.getElementById("boton")
    valido = false

    // Recorreor los elementos del formulario
    for(i = 0; i < formulario.elements.length -1; i++ ){
        formulario.elements[i].addEventListener("blur", validarFormulario)
    }
    boton.addEventListener("click", validarFormulario)

    function validarFormulario(ev){

        if(ev.type == "blur"){
            elemento = ev.currentTarget
            error = ""

            //Validar los campos de texto
            if(elemento.className=="texto"){
                valoreElemento = elemento.value
                expValor = RegExp("^([aA-zZ]|[0-9]|[!]|[*]|[$]|[%])+$")
                if(expValor.test(valoreElemento)){
                    valido = true
                }else{
                    error = "Formato de texto incorrecto"
                    valido = false
                }
                console.log(valido)
            }

            //Validar los campos de contraseña
            if(elemento.className=="contraseña"){
                valoreElemento = elemento.value
                expValor = RegExp("^([aA-zZ]|[0-9]|[!]|[*]|[$]|[%])+$")
                if(expValor.test(valoreElemento)){
                    valido = true
                }else{
                    error = "Formato de texto incorrecto"
                    valido = false
                }
            }

            // Validar dia y año
            if(elemento.id=="dia"){
                if(elemento.value > 31 || elemento.value < 1){
                    valido = false
                    error = "El dia no puede ser menor que 1 o mayor que 31"
                }else{
                    valido = true
                }
            }

            if(elemento.id=="año"){
                if(elemento.value < 1883 || elemento.value > 2023){
                    valido = false
                    error = "Año inválido"
                }else{
                    valido = true
                }
            
            }

            // Validar teléfono
            if (elemento.id == "telefono"){
                valoreElemento = elemento.value
                expValor = RegExp("^([0-9])+$")

                if(expValor.test(valoreElemento) && valoreElemento.length == 9){
                    valido = true
                }else{
                    error = "Teléfono inválido"
                    valido = false
                }
            }

            // Validar correo
            if (elemento.id == "correo"){
                valoreElemento = elemento.value
                expValor = RegExp("^(([Aa-zZ]|[0-9])*@gmail.com)+$")

                if(expValor.test(valoreElemento)){
                    valido = true
                }else{
                    error = "Correo inválido"
                    valido = false
                }
            }
            console.log(valido)

            if(!valido){
                document.getElementById("contenido").innerHTML = error
            }else{
                document.getElementById("contenido").innerHTML = " "
            }

        }else if(ev.type == "click"){
            if(!valido){
                document.getElementById("contenido1").innerHTML = "Hay errores en el formulario"
            }else{
                document.getElementById("contenido1").innerHTML = "Formulario enviado"
            }
        }

    }

    // EJERCICIO 9
    // Vaciar formulario
    botonVaciar = document.getElementById("botonVaciar")
    botonVaciar.addEventListener("click", vaciarFormulario)

    function vaciarFormulario(){

        confirmacion = prompt("¿Seguro que desea vaciar el formulario? (s/n)")
        if(confirmacion == "s"){
            for(i = 0; i < formulario.elements.length -2; i++ ){
                formulario.elements[i].value = ""
            }
        }


    }

}