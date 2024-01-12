window.addEventListener("load",inicio)

function inicio(){
 
    enlace = document.getElementById("enlace")
    enlace.addEventListener("mouseover", aniadeFondo)
    enlace.addEventListener("mouseout",retiraFondo)

    function aniadeFondo(){
        enlace.style.backgroundColor = "blue";
    }

    function retiraFondo(){
        enlace.style.backgroundColor = ""
    }
}