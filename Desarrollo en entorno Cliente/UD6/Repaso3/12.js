/*
Crea una página donde un div o una imagen persigue al ratón
 */

window.addEventListener("load",inicio)

function inicio(){

    div = document.createElement("div")
    div.id = "seguir"
    div.style = "width:50px; height:50px; border:solid; position:absolute"
    

    document.getElementsByTagName("body")[0].appendChild(div)

    document.addEventListener("mousemove", sigueRaton)

    function sigueRaton(ev){
        div.style.left = ev.pageX + 'px'
        div.style.top = ev.pageY + 'px'
    }
}