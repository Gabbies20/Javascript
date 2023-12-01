
window.addEventListener("load",inicio)

function inicio(){

    formulario = document.getElementById("formulario")

    for (var i = 0; i< formulario.elements.length-1; i++){
        formulario.elements[i].addEventListener("click",muestraRespuesta)
    }

    function muestraRespuesta(ev){
        resultado = document.getElementById("resultado")
        
        resp = ["Pupusas" ,"1819"]

        valorCurrentTarget = ev.currentTarget.value
        valorEncontrado =resp.find(valor => valor == valorCurrentTarget)

     
       if(valorEncontrado != undefined){
            resultado.innerHTML = "Respuesta correcta"
   
        }else{
            resultado.innerHTML = "Respuesta incorrecta"
        }


    }
}
