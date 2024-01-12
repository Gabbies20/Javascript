window.addEventListener("load",inicio)

function inicio(){

    boton = document.getElementById("boton")
    nombre = document.getElementById("nombre")
    
    boton.addEventListener("click", mostrarRespuesta)
    nombre.addEventListener("blur", rellenarDireccion)
    
    
    function mostrarRespuesta(){
        nombre = document.getElementById("nombre")
        direccion = document.getElementById("direccion")

        setCookie(nombre.value, direccion.value)
    }

    function rellenarDireccion(){
        nombre = document.getElementById("nombre")      
        direccion = document.getElementById("direccion")
        
        datos = getCookie()

        if(nombre.value == datos[0]){
            direccion.value  = datos[1]
        }else{
            setCookie(nombre.value, direccion.value)
        }
    }


    

    function setCookie(nombre, direccion) {

        document.cookie = nombre + "," + direccion;
        }

    function getCookie() {

        let infoCookie = decodeURIComponent(document.cookie);
        let listaCookies = infoCookie.split(',');
        return listaCookies
    }

}