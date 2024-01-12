window.addEventListener("load",inicio)

function inicio(){

    boton = document.getElementById("boton")
    nombre = document.getElementById("nombre")
    
    boton.addEventListener("click", mostrarRespuesta)
    nombre.addEventListener("blur", rellenarDireccion)
    
    
    function mostrarRespuesta(){
        nombre = document.getElementById("nombre")
        direccion = document.getElementById("direccion")
        localStorage.setItem("nombre", nombre.value)
        localStorage.setItem("direccion", direccion.value)
        
    }

    function rellenarDireccion(){
        nombre = document.getElementById("nombre")      
        direccion = document.getElementById("direccion")
        
        datosNombre = localStorage.getItem("nombre")
        datosDireccion = localStorage.getItem("direccion")

        if(nombre.value == datosNombre){
            direccion.value  = datosDireccion
        }else{
            localStorage.setItem("nombre", nombre.value)
            localStorage.setItem("direccion", direccion.value)
        }
    }

}