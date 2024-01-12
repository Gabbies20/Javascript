/*
<p>Este es el <em>contenido</em> de mi párrafo.</p>, 
	Crea una funcion JavaScript que sea llamada cuando el documento se cargue.
La función debería realizar lo que sigue:


Comienza con un documento HTML que contenga un <div> con id testdiv.
*/

window.addEventListener("load",inicio)

    function inicio(){

        para = document.createElement("p")
        txt1 = document.createTextNode("Este es el")
        para.appendChild(txt1)

        enfasis = document.createElement("em")
        txt2 = document.createTextNode(" contenido ")
        enfasis.appendChild(txt2)
        para.appendChild(enfasis)

        txt3 = document.createTextNode("de mi párrafo")
        para.appendChild(txt3)

        div = document.getElementById("testdiv").appendChild(para)
    }