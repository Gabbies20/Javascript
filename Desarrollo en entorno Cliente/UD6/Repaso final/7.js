window.addEventListener("load", inicio)

function inicio() {

    // Crear enlace
    div = div = document.createElement("div")
    div.id = "enlace"
    document.getElementsByTagName("body")[0].appendChild(div)

    enlace = document.createElement("a")
    enlace.href = "#"
    txt = document.createTextNode("Youtube")

    enlace.addEventListener("click", mostrarTabla)

    enlace.appendChild(txt)
    div.appendChild(enlace)



    function mostrarTabla() {

        if (document.getElementsByTagName("table")[0] == undefined) {
            tabla = document.createElement("table")
            tabla.id = "tabla"
            tabla.setAttribute('border', 'solid');
            div.appendChild(tabla)

            for (i = 0; i < 21; i++) {
                tr = document.createElement("tr")

                for (j = 0; j < 20; j++) {
                    td = document.createElement("td")

                    txt = document.createTextNode("H")
                    td.appendChild(txt)
                    td.setAttribute('width', '50');
                    tr.appendChild(td)
                }


                tabla.appendChild(tr)
            }


        }else{
            div.removeChild(tabla)
        }
    }

}