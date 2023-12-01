window.addEventListener("load",inicio)

function inicio(){

    formulario = document.getElementById("formulario")

    for (i = 0; i < formulario.elements.length; i++){
        formulario.elements[i].addEventListener("click",mostrarRespuesta)
    }

    function mostrarRespuesta(ev){
        soluciones = new Map ([['pregunta1', 'pupusas'],['pregunta2', '1819']])
        idElemento = ev.currentTarget.id
        claveRespuesta = ""
        valorRespuesta = ""

            for([key, value] of soluciones){

                if(value == idElemento && key == ev.currentTarget.name){
                    document.getElementById("resultado").innerHTML="Respuesta Correcta"
                    break;
                }else{
                    document.getElementById("resultado").innerHTML="Respuesta Incorrecta: " + key
                }
            }


    }
}