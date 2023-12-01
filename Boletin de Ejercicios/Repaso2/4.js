window.addEventListener("load",inicio)

function inicio(){
    formulario = document.getElementById("formulario")

    for(i=0; i < formulario.elements.length; i++){
        formulario.elements[i].addEventListener("click", respuestaTest)
    }

    function respuestaTest(ev){
        soluciones = new Map([
                                ['pregunta1', 'pupusas'],
                                ['pregunta2','1819']
                            ])
        respuestaCorrectaValor = ""
        respuestaCorrectaLlave = ""
        valorRespuesta = ev.currentTarget.id

        for([llave, valor] of soluciones){
            if(valorRespuesta == valor){
                respuestaCorrectaLlave = llave
                respuestaCorrectaValor = valor
            }
        }
        

        if(respuestaCorrectaValor != "" && respuestaCorrectaLlave == ev.currentTarget.name){
            document.getElementById("resultado").innerHTML = "Respuesta Correcta"
        }else{
            document.getElementById("resultado").innerHTML = "Respuesta Incorrecta"
        }

    }

}