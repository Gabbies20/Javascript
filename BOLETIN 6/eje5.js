/**
 * Crea un documento que contenga una tabla con al menos 20 filas y 20 columnas (sin copia-pega, usando bucles). Pon texto en las celdas, todo ello mediante DOM.
 * 
 * window.addEventListener("load",inicio);

function inicio(){

    div = document.getElementById("contenedor")

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
 */

window.addEventListener("load",inicio);

function inicio(){

    var tabla = document.createElement('table');
    document.body.appendChild(tabla);

    // Crear filas y columnas en la tabla
    for (var i = 0; i < 20; i++) {
        // Crear una fila
        var fila = document.createElement('tr');
        
        for (var j = 0; j < 20; j++) {
            // Crear una celda
            var celda = document.createElement('td');
            
            // Añadir texto a la celda
            var texto = document.createTextNode('Fila ' + (i + 1) + ', Columna ' + (j + 1));
            celda.appendChild(texto);
            
            // Añadir la celda a la fila
            fila.appendChild(celda);
        }
        
        // Añadir la fila a la tabla
        tabla.appendChild(fila);
    }
}