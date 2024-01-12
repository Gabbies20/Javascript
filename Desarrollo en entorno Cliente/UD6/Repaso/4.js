/*
Modifica la siguiente función JavaScript e inclúyela dentro de un fichero .js, de manera que no use innerHTML,
es decir, crea los nodos elementos y textos necesarios y añádelos a un HTML. 


function get_fortune() {
var hoy = new Date(); dichos= new Array(
"Carpe Diem.",
"El silencio es oro, pero la cinta aislante es plata.", 
"Una manzana al día, mantiene al doctor en la lejanía.", 
"A cada uno lo suyo.",
"Si a la primera no lo consigues, inténtalo de nuevo.", 
"No te conformes con la mediocridad, pelea por el éxito", "Vive y deja vivir."
);
var n=dichos.length;
numero = Math.floor(Math.random()*n);
dicho = "Hoy es: "+hoy+ ".<br /><br />Hoy la suerte te dice:
<br /><br /><em>" +dichos[numero] +"</em>"; document.getElementById('divdicho').innerHTML = dicho;

*/

window.addEventListener("load",inicio)

function inicio(){

    var hoy = new Date(); dichos= new Array(
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
        div.appendChild(txt1)

        br1 = document.createElement("br")
        br2 = document.createElement("br")
        div.appendChild(br1)
        div.appendChild(br2)

        txt2 = document.createTextNode("Hoy la suerte te dice:")
        div.appendChild(txt2)

        br3 = document.createElement("br")
        br4 = document.createElement("br")
        div.appendChild(br3)
        div.appendChild(br4)

        em = document.createElement("em")
        dicho = document.createTextNode(dichos[numero])
        em.appendChild(dicho)
        div.appendChild(em)


}