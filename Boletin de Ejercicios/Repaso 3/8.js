window.addEventListener("load", inicio)

function inicio() {
    formulario = document.getElementById("contacto")
    boton = document.getElementById("boton")
    contenido = document.getElementById("contenido")
    contenido1 = document.getElementById("contenido1")
    boton.disabled = true
    validar = false

    for (i = 0; i < formulario.elements.length - 1; i++) {
        formulario.elements[i].addEventListener("blur", validaFormulario)
    }

    function validaFormulario(ev) {
        elementoClase = ev.currentTarget.className
        elementoId = ev.currentTarget.id
        elementoValue = ev.currentTarget.value


        if (elementoClase == "texto") {
            expTexto = RegExp("^([aA-zZ]|[0-9]|[!]|[*]|[$]|[%])+$")

            if (expTexto.test(elementoValue)) {
                contenido.innerHTML = ""
                validar = true
            } else {
                contenido.innerHTML = "Texto incorrecto"
                validar = false
            }
        }

        if (elementoClase == "contraseña") {
            expTexto = RegExp("^([aA-zZ]|[0-9]|[!]|[*]|[$]|[%])+$")

            if (expTexto.test(elementoValue)) {
                contenido.innerHTML = ""
                validar = true
            } else {
                contenido.innerHTML = "Contraseña incorrecto"
                validar = false
            }
        }

        // Validar dia y año
        if(elementoId=="dia"){
            if(elementoValue > 31 || elementoValue < 1){
                validar = false
                contenido.innerHTML = "El dia no puede ser menor que 1 o mayor que 31"
            }else{
                validar = true
            }
        }

        if(elementoId=="año"){
            if(elementoValue < 1883 || elementoValue > 2023){
                validar = false
                contenido.innerHTML = "Año inválido"
            }else{
                validar = true
                contenido.innerHTML = ""
            }
        
        }

        // Validar teléfono
        if (elementoId == "telefono"){
            
            expValor = RegExp("^([0-9])+$")

            if(expValor.test(elementoValue) &&elementoValue.length == 9){
                validar = true
                contenido.innerHTML = ""
            }else{
                contenido.innerHTML = "Teléfono inválido"
                validar = false
                
            }
        }

        // Validar correo
        if (elementoId == "correo"){
        
            expValor = RegExp("^(([Aa-zZ]|[0-9])*@gmail.com)+$")

            if(expValor.test(elementoValue)){
                validar = true
                contenido.innerHTML = ""
            }else{
                contenido.innerHTML = "Correo inválido"
                validar = false
            }
        }
        
        for (i = 0; i < formulario.elements.length - 2; i++) {
            if(formulario.elements[i].value == "" || !validar){
                boton.disabled = true
            }else{
                boton.disabled = false
            }
        }
    }


    vaciarForm = document.getElementById("botonVaciar")

    
    vaciarForm.addEventListener("click", vaciaForm)

    function vaciaForm(ev){
        for (i = 0; i < formulario.elements.length - 2; i++) {
            formulario.elements[i].value = ""
        }
    }
  




}