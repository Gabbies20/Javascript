window.addEventListener("load",inicio)

function inicio(){

    var hoy = new Date(); 
    dichos= new Array(
        "Carpe Diem.",
        "El silencio es oro, pero la cinta aislante es plata.", 
        "Una manzana al día, mantiene al doctor en la lejanía.", 
        "A cada uno lo suyo.",
        "Si a la primera no lo consigues, inténtalo de nuevo.", 
        "No te conformes con la mediocridad, pelea por el éxito", 
        "Vive y deja vivir."
        );
    var n=dichos.length;
    numero = Math.floor(Math.random()*n);

    div = document.getElementById("testdiv")
    txt1 = document.createTextNode("Hoy es: " + hoy)
    br1 = document.createElement("br")
    br2 = document.createElement("br")
    txt2 = document.createTextNode(" Hoy la suerte de dice: ")
    br3 = document.createElement("br")
    br4 = document.createElement("br")
    em = document.createElement("em")
    dicho = document.createTextNode(dichos[numero])
    em.appendChild(dicho)

    div.appendChild(txt1)
    div.appendChild(br1)
    div.appendChild(br2)
    div.appendChild(txt2)
    div.appendChild(br3)
    div.appendChild(br4)
    div.appendChild(em)
    
        
}