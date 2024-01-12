window.addEventListener("load",inicio)

function inicio(){

    boton = document.getElementById("boton")
    nombre = document.getElementById("nombre")
    habitacion = document.getElementById("habitacion")
    cafes = document.getElementsByName("cafes")
    tipo_cafe = null
    respuesta = document.getElementById("respuesta")

    boton.addEventListener("click", mostrarInfo)

    function mostrarInfo(){


        datos = getCookies()

        if(datos[0]==nombre.value){
            respuesta.innerHTML = "Nueva oferta pa el " + datos[1]
            tipo_cafe = obtenerCafe(cafes)
            setCookie(datos[0], tipo_cafe)
        }else{
            tipo_cafe = obtenerCafe(cafes)
            respuesta.innerHTML = nombre.value + " su " + tipo_cafe + " lo espera en la habitacion " + habitacion.value
            console.log(habitacion.value)
            setCookie(nombre.value, tipo_cafe)
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















    

    //LOCAL STORAGE
        /*  
        nombreSt = localStorage.getItem("nombre")
        cafeSt = localStorage.getItem("cafe")

        if(nombreSt==nombre.value){
            tipo_cafe = obtenerCafe(cafes)
            respuesta.innerHTML = "Oferta especial sobre el: " + cafeSt
            localStorage.setItem("nombre", nombreSt)
            localStorage.setItem("cafe", tipo_cafe)
        }else{
            tipo_cafe = obtenerCafe(cafes)
            respuesta.innerHTML = nombre.value + ", su " + tipo_cafe + " será enviado a la habitación " + habitacion.value
            localStorage.setItem("nombre", nombre.value)
            localStorage.setItem("cafe", tipo_cafe)
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
    */

    //SESION STORAGE
    /*
        nombreSt = sessionStorage.getItem("nombre")
        cafeSt = sessionStorage.getItem("cafe")

        if(nombreSt==nombre.value){
            tipo_cafe = obtenerCafe(cafes)
            respuesta.innerHTML = "Oferta especial sobre el: " + cafeSt
            sessionStorage.setItem("nombre", nombreSt)
            sessionStorage.setItem("cafe", tipo_cafe)
        }else{
            tipo_cafe = obtenerCafe(cafes)
            respuesta.innerHTML = nombre.value + ", su " + tipo_cafe + " será enviado a la habitación " + habitacion.value
            sessionStorage.setItem("nombre", nombre.value)
            sessionStorage.setItem("cafe", tipo_cafe)
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
    */   
    }

  

}