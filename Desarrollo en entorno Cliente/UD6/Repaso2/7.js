window.addEventListener("load",inicio)

function inicio(){

    div = document.getElementById("testdiv")
    enlace = document.createElement("a")
    enlace.id ="inactivo"
    enlace.href = "#"
    txt = document.createTextNode("Youtube")

    enlace.appendChild(txt)
    div.appendChild(enlace)

    enlace.addEventListener("click",mostrarTabla)

    function mostrarTabla(){

        if(enlace.id=="inactivo"){

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
                enlace.id ="activo"
            }

        }else if(enlace.id == "activo"){

            div.removeChild(tabla)
            enlace.id = "inactivo"
        }


    }

}