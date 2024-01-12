/**
 * Usa DOM para crear dinámicamente un enlace link y pon sus atributos. Usa DOM para coger los atributos y mostrar su valor en un Div creado al efecto.
 */

window.addEventListener("load",inicio)

function inicio(){

    div = document.getElementById("contenedor")

    a = document.createElement("a")
    a.href="https://www.youtube.com/"
    a.id = "enlace"
    txt = document.createTextNode("Youtube")
    a.appendChild(txt)

    div.appendChild(a)

    
    

    for(var x = 0; x<document.getElementById("enlace").attributes.length; x++ ){
       
        var atributo = document.getElementById("enlace").attributes[x];
        p = document.createElement("p")
        txt1 = document.createTextNode(atributo.nodeName + ": " + atributo.nodeValue + "\n")
        p.appendChild(txt1)   
        div.appendChild(p)
}

    

}