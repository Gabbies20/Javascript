window.addEventListener("load",inicio)

function inicio(){

    div = document.getElementById("testdiv")

    ul = document.createElement("ul")
    ul.style = "list-style-type:square"

    div.appendChild(ul)

    li1 = document.createElement("li")
    txt1 = document.createTextNode("Fiesta")
    li1.id = "Fiesta"
    li1.appendChild(txt1)
    ul.appendChild(li1)

    li2 = document.createElement("li")
    txt2 = document.createTextNode("Focus")
    li2.id = "Focus"
    li2.appendChild(txt2)
    ul.appendChild(li2)

    li3 = document.createElement("li")
    txt3 = document.createTextNode("BMW")
    li3.id = "BMW"
    li3.appendChild(txt3)
    ul.appendChild(li3)

    //Añadir elemento al principio
    li4 = document.createElement("li")
    txt4 = document.createTextNode("Corsa")
    li4.id = "Corsa"
    li4.appendChild(txt4)
    ul.insertBefore(li4, li1)


    //Añadir elemento en el medio
    li5 = document.createElement("li")
    txt5 = document.createTextNode("Persa")
    li5.id = "Persa"
    li5.appendChild(txt5)
    ul.insertBefore(li5, document.getElementsByTagName("li")[2])

    // Añadir antes que BMW
    li6 = document.createElement("li")
    txt6 = document.createTextNode("Forza")
    li6.id = "Corsa"
    li6.appendChild(txt6)
    ul.insertBefore(li6, document.getElementById("BMW"))



  

}