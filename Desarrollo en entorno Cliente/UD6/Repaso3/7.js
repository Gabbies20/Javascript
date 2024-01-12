/*
Usa DOM para crear dinámicamente un enlace link y pon sus atributos. 
Usa DOM para coger los atributos y mostrar su valor en un Div creado al efecto.
*/

window.addEventListener("load", inicio)

function inicio() {

    div = document.getElementById("testdiv")

    a = document.createElement("a")
    a.href = "#"
    a.id = "enlace"
    txt = document.createTextNode("Youtube")
    a.appendChild(txt)

    div.appendChild(a)


    a.addEventListener("click", muestraTabla)

    function muestraTabla() {
     
        if (document.getElementsByTagName("table")[0] == undefined) {
            tabla = document.createElement("table")
            tabla.setAttribute('border', 'solid');
            div.appendChild(tabla)

            for (i = 0; i < 20; i++) {
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
