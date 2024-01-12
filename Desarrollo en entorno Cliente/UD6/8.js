/*
Crear mediante DOM y a partir del siguiente array de objetos expresado en formato JSON:
    [
        {src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12", ...]},
        {src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22", ...]},
    ...
    ]


El siguiente código HTML:


<div id="todos-los-viajes">
    <h1>Subtituloo</h1>
    <ul>

        <li>
            <img src="/img/img1.jpg" />
            <p> descripcion1 </p>
            <ul class="specs">
                <li>spec1</li>
                <li>spec2</li>
            ...
            </ul>
        </li>

        <li>
        …
        </li>
    </ul>
</div>

*/

window.addEventListener("load",inicio)

    function inicio(){

    json = [{src:"imagen1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
            {src:"imagen2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]},
            {src:"Imagen3.jpg", desc: "descripcion3", specs: ["spec31", "spec32"]}]


    div = document.createElement("div")
    div.id="todos-los-viajes"
    document.getElementsByTagName("body")[0].appendChild(div)

    h1 = document.createElement("h1")
    h1Txt= document.createTextNode("Subtitulo")
    h1.appendChild(h1Txt)
    div.appendChild(h1)
    ul1 = document.createElement("ul")
    div.appendChild(ul1)

    // Crea los elementos del JSON
    for(i of json){
        li1 = document.createElement("li")
        ul1.appendChild(li1)

        img = document.createElement("img")
        img.src = i.src
        img.width = "500"
        li1.appendChild(img)

        // Creo los eventos para las imagenes
        img.addEventListener('click',ocultarInfo,false);

        p = document.createElement("p")
        pTxt = document.createTextNode(i.desc)
        p.appendChild(pTxt)
        li1.appendChild(p)

        ul2 = document.createElement("ul")
        ul2.setAttribute('class',"specs");
        li1.appendChild(ul2)

        for(j of i.specs){
            li2 = document.createElement("li")
            txtLi=document.createTextNode(j)
            li2.appendChild(txtLi)
            ul2.appendChild(li2)
        }

    }

    // Ejer 9
    /*
    Añade un evento al ejercicio anterior en el que si se hace click en la imagen se oculta toda la información 
    relacionada con esa imagen, al hacer clic de nuevo en la imagen volverá a aparecer toda la información anteriormente ocultada.
    */
    function ocultarInfo(ev){
        console.log(ev.currentTarget.nextSibling)
        hermano =  ev.currentTarget.nextSibling
        padre = hermano.parentNode
        numero_hermanos = padre.children.length - 1

        for (i = 0; i < numero_hermanos; i++){

            if(hermano.style.display == "none"){
                hermano.style="display: block;"
            }else{
                hermano.style="display: none;"
            }
            hermano = hermano.nextSibling
        }

        }

    

}