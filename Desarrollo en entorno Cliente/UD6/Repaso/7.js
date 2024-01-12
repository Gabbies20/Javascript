/*
Basándote, en el código del ejercicio 6, añade un enlace que al pulsarlo haga aparecer y 
desaparecer la tabla creada en el ejercicio 5 (borrándola, mediante métodos DOM).

*/

window.addEventListener("load",inicio)

function inicio(){

    div = document.getElementById("testdiv")

    a = document.createElement("a")
    a.href="#"
    a.id = "enlace"
    txt = document.createTextNode("Youtube")
    a.appendChild(txt)

    div.appendChild(a)

    tablaExiste = document.getElementById("tabla")
    console.log(tablaExiste)

    tabla = null
    a.addEventListener("click", mostrarTabla)
   
 

    function mostrarTabla(){
        
        if(tabla == null){
            tabla = document.createElement("table")
            tabla.id="tabla"
            tabla.setAttribute('border', 'solid');
            div.appendChild(tabla)

            for (i = 0; i < 2; i++){
                tr = document.createElement("tr")
                
                for(j = 0; j < 2; j++){
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
            tabla = null
            
        }        
      
    }

    

}