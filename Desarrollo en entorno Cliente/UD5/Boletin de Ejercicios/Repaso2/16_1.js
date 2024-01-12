window.addEventListener("load",inicio)

function inicio(){

    boton = document.getElementById("boton")

    boton.addEventListener("click", muestraRespuesta)

    function muestraRespuesta(){

        nombre = document.getElementById("nombre")
        habitacion = document.getElementById("habitacion")
        cafes = document.getElementsByName("cafes")
        respuesta = document.getElementById("respuesta")
        tipo_cafe = null

        nombreSesion = localStorage.getItem("nombre")
        cafeSesion = localStorage.getItem("cafe")


        if(nombreSesion==nombre.value){
            respuesta.innerHTML = "una tarifa especial para su " + cafeSesion
            tipo_cafe = obtenerCafe(cafes)
            localStorage.setItem("nombre",nombreSesion)
            localStorage.setItem("cafe",tipo_cafe)

           
        }else{
            tipo_cafe = obtenerCafe(cafes)
            localStorage.setItem("nombre",nombre.value)
            localStorage.setItem("cafe",tipo_cafe)
            respuesta.innerHTML = nombre.value + ", su " + tipo_cafe  + " será enviado a la habitación número "  + habitacion.value
        }
        
    }

    function obtenerCafe(cafes){
        for (cafe of cafes){
            if (cafe.checked){
                tipo_cafe = cafe.id
            }
        }
        
        return tipo_cafe
    }

}