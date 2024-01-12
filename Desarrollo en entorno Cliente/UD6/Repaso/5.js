/*
Crea un documento que contenga una tabla con al menos 20 filas y 20 columnas (sin copia-pega, usando bucles). 
Pon texto en las celdas, todo ello mediante DOM.
*/


window.addEventListener("load",inicio)

function inicio(){

    div = document.getElementById("testdiv")

    tabla = document.createElement("table")
    tabla.setAttribute('border', 'solid');

    for(i=0; i < 20; i++){
        tr = document.createElement("tr")
       

        for(j=0; j < 20; j++){
            td = document.createElement("td")
            td.width="50"
            txt = document.createTextNode("TEXTO")
            td.appendChild(txt)
            tr.appendChild(td)
        }
        tabla.appendChild(tr)

    }
    div.appendChild(tabla)
}