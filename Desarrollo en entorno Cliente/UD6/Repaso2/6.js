+window.addEventListener("load",inicio)

function inicio(){

    div1 = document.getElementById("testdiv")
    enlace = document.createElement("a")
 
    enlace.href = "https://www.youtube.com/"
    txt = document.createTextNode("Youtube")

    enlace.appendChild(txt)
    div1.appendChild(enlace)

    div2 = document.createElement("div")

    div1.parentNode.appendChild(div2)
    atributos = document.getElementsByName(enlace)
    console.log(atributos)
    for (var i of enlace.attributes){
        txt1 = document.createTextNode("-Nombre del atributo: " + i.nodeName + " Valor del atributo: " + i.nodeValue)
        
        div2.appendChild(txt1)
       
    }

}