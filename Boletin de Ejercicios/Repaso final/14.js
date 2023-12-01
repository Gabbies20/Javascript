window.addEventListener("load",inicio)

function inicio(){

    boton = document.getElementById("boton")
    boton.addEventListener("click",mostrarOferta)
        
    function mostrarOferta(){

        nombre = document.getElementById("nombre")
        habitacion = document.getElementById("habitacion")
        cafes = document.getElementsByName("cafes")
        tipo_cafe = null
        respuesta = document.getElementById("respuesta")

        datos = getCookies()

        if(datos[0] == nombre.value){
            respuesta.innerHTML = "Tiene una oferta sobre su " + datos[1]
            tipo_cafe = obtenerCafe(cafes)
            setCookie(datos[0], tipo_cafe)
        }else{
            tipo_cafe = obtenerCafe(cafes)
            setCookie(nombre.value, tipo_cafe)
            respuesta.innerHTML = nombre.value + " su " + tipo_cafe + " se encuentra en la habitación " + habitacion.value
          
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


    function setCookie(nombre, cafe) {

        document.cookie = nombre + "," + cafe;
        }

    function getCookies(){
        
        cookies = decodeURIComponent(document.cookie)
        listaCookies = cookies.split(",")

        return listaCookies        
    }

}