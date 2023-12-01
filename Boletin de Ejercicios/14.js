window.addEventListener("load",inicio)

function inicio(){

    boton = document.getElementById("boton")
    boton.addEventListener("click",muestraRespuesta)
    

    function muestraRespuesta(){
        respuesta = document.getElementById("respuesta")
        nombre = document.getElementById("nombre")
        habitacion = document.getElementById("habitacion")
        cafes = document.getElementsByName("cafes")
        tipo_cafe = null

    
        datosSesion = getCookie()

        // Si el usuario coincide mostrará la oferta del café
        if(datosSesion[0] == nombre.value){
            respuesta.innerHTML = "una tarifa especial para su " + datosSesion[1] 
            tipo_cafe=obtenerCafe(cafes)
            setCookie(datosSesion[0], tipo_cafe )

        } else{
            // Obtener el valor de campos tipo radio
            tipo_cafe=obtenerCafe(cafes)
            setCookie(nombre.value, tipo_cafe )

            respuesta.innerHTML = nombre.value + ", su " + tipo_cafe  + " será enviado a la habitación número "  + habitacion.value
        }    

    }

    // Funcion para obtener el tipo de café
    function obtenerCafe(cafes){
        // Recorrerá los radio butons en busca del café que emos marcado
        for (var cafe of cafes){
            if(cafe.checked){
                tipo_cafe = cafe.id
            }
        }
        return tipo_cafe
    }

    // Funcion que añade una cookie
    function setCookie(nombre, cafe) {

        document.cookie = nombre + "," + cafe;
        }

    // Función para obtener las cookies
    function getCookie() {

        let infoCookie = decodeURIComponent(document.cookie);
        let listaCookies = infoCookie.split(',');

        return listaCookies;
    }
}