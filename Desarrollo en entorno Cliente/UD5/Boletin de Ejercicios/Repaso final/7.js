window.addEventListener("load",inicio)

function inicio(){
    formulario = document.getElementById("formulario")

    for(i = 0 ; i < formulario.elements.length; i++){
        formulario.elements[i].addEventListener("click", cambiaFondo)
    }

    function cambiaFondo(ev){
        elemento = ev.currentTarget

        formulario.style.backgroundColor = elemento.id
    }
}