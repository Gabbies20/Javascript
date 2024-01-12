window.addEventListener("load",inicio)

function inicio(){

    boton = document.getElementById("boton")

    boton.addEventListener("click", muestraRespuesta)

    function muestraRespuesta(){

        /*
        nombre = document.getElementById("nombre")
        habitacion = document.getElementById("habitacion")
        cafes = document.getElementsByName("cafes")
        respuesta = document.getElementById("respuesta")
        tipo_cafe = null

        nombreAlmacenado = localStorage.getItem("nombre")
        cafeAlmacenado = localStorage.getItem("cafe")
        console.log(nombreAlmacenado)

        if(nombreAlmacenado==nombre.value){
            respuesta.innerHTML = nombreAlmacenado +": una tarifa especial para su " + cafeAlmacenado
            tipo_cafe = obtenerCafe(cafes)
            console.log(tipo_cafe)
            localStorage.setItem("nombre",nombreAlmacenado, tipo_cafe)
            localStorage.setItem("cafe", tipo_cafe)
           
        }else{
            tipo_cafe = obtenerCafe(cafes)
            localStorage.setItem("nombre",nombre.value, tipo_cafe)
            localStorage.setItem("cafe", tipo_cafe)
            console.log(tipo_cafe)
            respuesta.innerHTML = nombre.value + ", su " + tipo_cafe  + " será enviado a la habitación número "  + habitacion.value
        }
        
    }

    */

    nombre = document.getElementById("nombre")
    habitacion = document.getElementById("habitacion")
    cafes = document.getElementsByName("cafes")
    respuesta = document.getElementById("respuesta")
    tipo_cafe = null

    nombreAlmacenado = sessionStorage.getItem("nombre")
    cafeAlmacenado = sessionStorage.getItem("cafe")
    console.log(nombreAlmacenado)

    if(nombreAlmacenado==nombre.value){
        respuesta.innerHTML = nombreAlmacenado +": una tarifa especial para su " + cafeAlmacenado
        tipo_cafe = obtenerCafe(cafes)
        console.log(tipo_cafe)
        sessionStorage.setItem("nombre",nombreAlmacenado, tipo_cafe)
        sessionStorage.setItem("cafe", tipo_cafe)
       
    }else{
        tipo_cafe = obtenerCafe(cafes)
        sessionStorage.setItem("nombre",nombre.value, tipo_cafe)
        sessionStorage.setItem("cafe", tipo_cafe)
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


}