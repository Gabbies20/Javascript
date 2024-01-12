window.addEventListener("load",inicio)

function inicio(){
    div = document.getElementById("testdiv")
    tabla = document.createElement("table")
    tabla.setAttribute('border', 'solid');
    div.appendChild(tabla)

    for(fila = 0; fila < 20; fila++){
        tr = document.createElement("tr")

        for(columna = 0; columna < 20; columna++){
            td = document.createElement("td")
            td.style="width:50px"
            txt = document.createTextNode("H")
            td.appendChild(txt)
            tr.appendChild(td)
        }
        tabla.appendChild(tr)
    }
}