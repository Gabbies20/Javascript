
/*
    Crear   un   formulario   que   utiliza   un   campo   de   entrada   de   texto, que   pida   al   usuario   que escriba   su   nombre   en   letras   mayúsculas.  
    El   botón   de   envío   será   una   imagen.   Validar que   el   formulario   no   está   vacío   y   que   el   usuario   ha   escrito   su   nombre   sólo   con   letras mayúsculas. 
    Envíe el formulario a un programa de servidor si es correcto.
*/


window.addEventListener("load",inicio)

function inicio(){
    formulario = document.getElementById("formulario")

    for(i=0; i<formulario.elements.length; i++){
        formulario.elements[i].addEventListener("click", mostrarColor)
    }

    function mostrarColor(ev){
        formulario.style.backgroundColor = ev.currentTarget.id
    }
}