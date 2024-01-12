/*
Basándote, en el código del ejercicio 6, añade un enlace que al pulsarlo haga aparecer y desaparecer la 
tabla creada en el ejercicio 5 (borrándola, mediante métodos DOM).
*/


window.addEventListener("load",inicio)

function inicio(){

    // Crear enlace
    div = document.createElement("div")
    div.id="agregar"
    document.getElementsByTagName("body")[0].appendChild(div)

    enlace = document.createElement("a")
    enlace.href="#"
    txt = document.createTextNode("Agregar tabla")
    
    enlace.appendChild(txt)
    div.appendChild(enlace)


    div1 = document.createElement("div")
    div1.id="borrar"
    document.getElementsByTagName("body")[0].appendChild(div1)

    enlace1 = document.createElement("a")
    enlace1.href="#"
    txt1 = document.createTextNode("Borrar tabla")
    
    enlace1.appendChild(txt1)
    div1.appendChild(enlace1)

    
    
        document.getElementById("agregar").addEventListener('click',mostrarTabla,false);
     

        document.getElementById("borrar").addEventListener('click',ocultarTabla,false);
 
    


    
    function mostrarTabla(){

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

    function ocultarTabla(){
        
        document.getElementsByTagName("body")[0].removeChild(tabla)
    }



}