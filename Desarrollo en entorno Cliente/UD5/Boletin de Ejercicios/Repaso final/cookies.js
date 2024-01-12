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

       
        document.cookie = "Cafe="+obtenerCafe(cafes)
        document.cookie = "NombreCookie="+nombre.value
        console.log(document.cookie)
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
