
window.addEventListener("load",inicio)

function inicio(){

    formulario = document.getElementById("formulario")

    for(i = 0; i < formulario.elements.length; i++){
        formulario.elements[i].addEventListener("click", muestraRespuesta)
    }

    function muestraRespuesta(ev){

        idElemento = ev.currentTarget.id
        respuestasCorrectas = new Map([['pregunta1', 'pupusas'],['pregunta2', '1819']])
        comprobarRespuesta = ""
        claveRespuesta = ""

        for (var [key, value] of respuestasCorrectas) {
        
            if (idElemento == value){
                claveRespuesta = key
                comprobarRespuesta = value
            }
        }

        //comprobarRespuesta = respuestasCorrectas.find(valor => valor == idElemento)


        if(comprobarRespuesta != "" && ev.currentTarget.name == claveRespuesta){
            document.getElementById("resultado").innerHTML = "Respuesta Correcta"
        }else{
            document.getElementById("resultado").innerHTML = "Respuesta Incorrecta"
        }
        
    }
}