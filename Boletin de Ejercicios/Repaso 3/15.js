window.addEventListener("load",inicio)

function inicio(){

    boton = document.getElementById("boton")
    nombre = document.getElementById("nombre")
    direcccion = document.getElementById("direccion")
    boton.addEventListener("click", mostrarInfo)
    nombre.addEventListener("blur", mostrarInfo)



    function mostrarInfo(ev){

        console.log(direcccion.value)

        if(ev.type == "click"){
            setCookie(nombre.value, direcccion.value)
        }else{

            datos = getCookies()
            if(datos[0] == nombre.value){
                direcccion.value = datos[1]
            }else{
                setCookie(nombre.value, direcccion.value)
            }
        }

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