window.addEventListener("load",inicio)

function inicio(){

    boton = document.getElementById("boton")

    boton.addEventListener("click", mostrarInfo)


    function mostrarInfo(){

        

        nombre = document.getElementById("nombre")
        habitacion = document.getElementById("habitacion")
        cafes = document.getElementsByName("cafes")
        tipo_cafe = obtenerCafe(cafes)

        respuesta = document.getElementById("respuesta")

        datos = getCookies()

        console.log(datos[0])
        console.log(nombre.value)

        if(datos[0]==nombre.value){
            respuesta.innerHTML= "Pruebe nuestra oferta de: " + datos[1]
            tipo_cafe = obtenerCafe(cafes)
            setCookie(datos[0], tipo_cafe)
        }else{
            tipo_cafe = obtenerCafe(cafes)
            setCookie(nombre.value, tipo_cafe)
            respuesta.innerHTML= nombre.value + " Su " + tipo_cafe + " ha sido enviado a la habiación " + habitacion.value

        }

    }





    function obtenerCafe(cafes){
        tipo_cafe = null
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