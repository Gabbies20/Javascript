
window.addEventListener("load",inicio)

function inicio(){

    formulario = document.getElementById("formulario")

    for(i=0; i < formulario.elements.length; i++){
        formulario.elements[i].addEventListener("click", cambiaFondo)
    }

    function cambiaFondo(ev){
        
      
        formulario.style.backgroundColor=ev.currentTarget.id
    }
}