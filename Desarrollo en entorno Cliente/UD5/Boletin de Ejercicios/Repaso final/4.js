window.addEventListener("load",inicio)

function inicio(){


    formulario = document.getElementById("formulario")

    for (i = 0; i < formulario.elements.length; i++){
        formulario.elements[i].addEventListener("click", mostrarRespuestas)
    }

    function mostrarRespuestas(ev){
        soluciones = new Map([['pregunta1', 'pupusas'],['pregunta2','1819']])

        respuestaId = ev.currentTarget.id
        respuestaClave = ev.currentTarget.name

        console.log(respuestaId,respuestaClave)
        

        if(soluciones.get(respuestaClave) == respuestaId){
            document.getElementById("resultado").innerHTML="Respuesta correcta"
        }else{
            document.getElementById("resultado").innerHTML="Respuesta incorrecta: " + soluciones.get(respuestaClave)
        }
    }
}