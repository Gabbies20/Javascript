window.addEventListener("load",inicio)

function inicio(){

    boton = document.getElementById("boton")
    nombre = document.getElementById("nombre")
    
    boton.addEventListener("click", mostrarRespuesta)
    nombre.addEventListener("blur", mostrarRespuesta)
    direccion = document.getElementById("direccion")
    

    function mostrarRespuesta(ev){
        if(ev.type == "click"){
            localStorage.setItem("nombre", nombre.value)
            localStorage.setItem("direccion", direccion.value)
            nombre.value = ""
            direccion.value = ""

        }else if (ev.type == "blur"){
            nombreSesion = localStorage.getItem("nombre")
            direccionSesion = localStorage.getItem("direccion")

            if(nombre.value == nombreSesion){
                direccion.value  = direccionSesion
                localStorage.setItem("nombre", nombreSesion)
                localStorage.setItem("direccion", direccion.value)
            }else{
                localStorage.setItem("nombre", nombre.value)
                localStorage.setItem("direccion", direccion.value)
            }
        }
    }

}