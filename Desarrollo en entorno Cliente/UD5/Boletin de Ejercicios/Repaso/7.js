window.addEventListener("load",inicio)


function inicio(){
    formulario = document.getElementById("formulario")

    for(i = 0; i < formulario.elements.length; i++){
        formulario.elements[i].addEventListener("click",cambiaColor)
    }

    function cambiaColor(ev){
        
        color = ev.currentTarget.id
        document.getElementById("formulario").style.backgroundColor = color
    }
}