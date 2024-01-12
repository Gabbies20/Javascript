/*
Crea un documento HTML con una lista de modelos de coches cuyo estilo sea de cuadradillo. 
Escribe una función JavaScript que use la f. getElementsByTagName() para recuperar los elementos de la lista. 
Añade el estilo de cuadradilla de la lista mediante JavaScript. Añade un nuevo modelo a la lista usando DOM, 
al principio, al final y en alguna posición intermedia que elijas. 

Imagina que tenemos que insertar un nuevo modelo de coche, por ejemplo “BMW”, 
pero 	no conocemos en qué posición de la lista de nodos hijos está. Busca ese 
elemento por su texto y añade el nuevo modelo antes y después de este.
*/

window.addEventListener("load",inicio)

function inicio(){

    // Creamos la lista
    ul = document.createElement("ul")
    ul.id = "lista"
    ul.style = "list-style-type:square"

    // Creamos los elementos de la lista

    li1 = document.createElement("li")
    txt1 = document.createTextNode("BMW")
    li1.appendChild(txt1)
    ul.appendChild(li1)

    li2 = document.createElement("li")
    txt2 = document.createTextNode("Fiesta")
    li2.appendChild(txt2)
    ul.appendChild(li2)

    li3 = document.createElement("li")
    txt3 = document.createTextNode("Focus")
    li3.appendChild(txt3)
    ul.insertBefore(li3,li2)


    marcas = document.getElementsByTagName("li")
 

    

 
    document.getElementById("testdiv").appendChild(ul)
}