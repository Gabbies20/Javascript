window.addEventListener("load",inicio)

function inicio(){

    boton = document.getElementById("boton")
    nombre = document.getElementById("nombre")
    
 
    boton.addEventListener("click",muestraRespuesta)
    nombre.addEventListener("blur", rellenaDireccion)

    // Si el usuario introduce los datos por primera vez se guardan los datos en las Cookies 
    function muestraRespuesta(){
        nombre = document.getElementById("nombre")      
        direccion = document.getElementById("direccion")
    
        setCookie(nombre.value, direccion.value)
        }
        
    
    // Si el usuario ya está almacenado en las cookies rellena automáticamente la direccion
    function rellenaDireccion(){
        nombre = document.getElementById("nombre")      
        direccion = document.getElementById("direccion")
        
        datos = getCookie()

        if(nombre.value == datos[0]){
            document.getElementById("direccion").value = datos[1]
            setCookie(datos[0], direccion.value)
        }else{
            setCookie(nombre.value, direccion.value)
        }
    }


    //Funcion que añade una cookie
    function setCookie(nombre, direccion) {

        document.cookie = nombre + "," + direccion;
        }

    function getCookie() {

        let infoCookie = decodeURIComponent(document.cookie);
        let listaCookies = infoCookie.split(',');
        return listaCookies
    }
    
}
           
