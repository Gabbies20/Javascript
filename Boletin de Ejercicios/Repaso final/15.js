window.addEventListener("load",inicio)

function inicio(){

    boton = document.getElementById("boton")
    nombre = document.getElementById("nombre")

    boton.addEventListener("click", mostrarDireccion)
    nombre.addEventListener("blur", mostrarDireccion)

    function mostrarDireccion(ev){

        nombre = document.getElementById("nombre")
        direccion = document.getElementById("direccion")
        if(ev.type=="click"){

            setCookie(nombre.value,direccion.value)
        }else if(ev.type == "blur"){
            datos = getCookies()

            if(datos[0]==nombre.value){
                direccion.value = datos[1]
            }else{
                setCookie(nombre.value, direccion.value)
            }
        }
    }

    function setCookie(nombre, direccion) {

        document.cookie = nombre + "," + direccion;
        }

    function getCookies(){
        
        cookies = decodeURIComponent(document.cookie)
        listaCookies = cookies.split(",")

        return listaCookies        
    }
}


