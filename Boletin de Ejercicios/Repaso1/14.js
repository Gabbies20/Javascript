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

        datosSesion = getCookies()

        console.log(datosSesion[1])
        
        if(datosSesion[0]==nombre.value){
            respuesta.innerHTML = "una tarifa especial para su " + datosSesion[1] 
            tipo_cafe = obtenerCafe(cafes)
            console.log(tipo_cafe)
            setCookie(datosSesion[0], tipo_cafe)
           
        }else{
            tipo_cafe = obtenerCafe(cafes)
            setCookie(nombre.value, tipo_cafe)
            console.log(tipo_cafe)
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


    function setCookie(nombre, cafe) {

        document.cookie = nombre + "," + cafe;
        }

    function getCookies(){
        
        cookies = decodeURIComponent(document.cookie)
        listaCookies = cookies.split(",")

        return listaCookies        
    }
}