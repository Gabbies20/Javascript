/*
Usa DOM para crear dinámicamente un enlace link y pon sus atributos. Usa DOM para coger los atributos y 
mostrar su valor en un Div creado al efecto.
*/


window.addEventListener("load",inicio)

function inicio(){

    // Crear enlace
    div =    div = document.createElement("div")
    div.id="enlace"
    document.getElementsByTagName("body")[0].appendChild(div)

    enlace = document.createElement("a")
    enlace.href="https://www.youtube.com/"
    enlace.id = "2"
    txt = document.createTextNode("Youtube")
    
    enlace.appendChild(txt)
    div.appendChild(enlace)


    //Mostrar los atributos del enlace en un div
    div1 =document.createElement("div")
    document.getElementsByTagName("body")[0].appendChild(div1)

    ul = document.createElement("ul")
    console.log(enlace.attributes.length)

    for (var i = 0; i < enlace.attributes.length; i++){
        li = document.createElement("li")
        atributo = document.createTextNode( enlace.attributes[i].nodeName + ": " + enlace.attributes[i].nodeValue) 
    
        li.appendChild(atributo)
        ul.appendChild(li)
    }


    
    div1.appendChild(ul)


    


}