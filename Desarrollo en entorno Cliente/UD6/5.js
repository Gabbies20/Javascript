
/*
    Crea un documento que contenga una tabla con al menos 20 filas y 20 columnas (sin copia-pega, 
    usando bucles). 
        
    Pon texto en las celdas, todo ello mediante DOM
*/


window.addEventListener("load",inicio)

function inicio(){

    tabla = document.createElement("table")
    tabla.id="tabla"
    tabla.setAttribute('border', 'solid');
    document.getElementsByTagName("body")[0].appendChild(tabla)
    
    for (i = 0; i < 21; i++){
        tr = document.createElement("tr")
        
        for(j = 0; j < 20; j++){
            td = document.createElement("td")

            txt = document.createTextNode("H")
            td.appendChild(txt)
            td.setAttribute('width', '50');
            tr.appendChild(td)
        }


        tabla.appendChild(tr)
    }


   

}