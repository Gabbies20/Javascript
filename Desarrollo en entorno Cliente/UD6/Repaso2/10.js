window.addEventListener("load",inicio)

function inicio(){

    div = document.getElementById("testdiv")
    div.style="width:2000px; height:2000px; border:solid"
    div.addEventListener("mousemove",mostrarCoordenadas)

    p = document.createElement("p")
    div.appendChild(p)
    
    function mostrarCoordenadas(ev){
        txt = document.createTextNode("Eje X: " + ev.clientX + " Eje Y: " + ev.clientY)
        p.appendChild(txt)
        
    }
    
    
}
