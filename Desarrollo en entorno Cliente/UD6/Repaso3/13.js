/*
Crea una página con un div y permite arrastrarlo con el ratón a otro div.
 */

window.addEventListener("load",inicio)

function inicio(){

    div = document.createElement("div")
    div.id = "seguir"
    div.style = "width:300px; height:300px; border:solid;"

    div1 = document.createElement("div")
    div1.id = "seguir"
    div1.style = "width:50px; height:50px; border:solid;"
    div1.draggable = "true"

    

    document.getElementsByTagName("body")[0].appendChild(div)
    document.getElementsByTagName("body")[0].appendChild(div1)


    document.addEventListener("dragstart", dragstart)
    document.addEventListener("dragover", dragover)
    document.addEventListener("drop", droptarget)
    

    function dragstart(ev){
        ev.dataTransfer.setData("Text", ev.target.id);
    
    }

    function dragover(ev){
        ev.preventDefault();
    }

    function droptarget(ev){
        ev.preventDefault();
        ev.target.append(div1)
    }




}