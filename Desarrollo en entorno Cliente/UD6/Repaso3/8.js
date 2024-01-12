/*
Crear mediante DOM y a partir del siguiente array de objetos expresado en formato JSON:
[
{src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12", ...]},
{src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22", ...]},
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

    datos = [
        {src:"./imagenes/imagen1.jpg", desc: "descripcion1", specs: ["spec11", "spec12",]},
        {src:"./imagenes/imagen2.jpg", desc: "descripcion2", specs: ["spec21", "spec22",]},
    ]

    div = document.createElement("div")
    div.id = "todos-los-viajes"
    document.getElementsByTagName("body")[0].appendChild(div)

    h1 = document.createElement("h1")
    txtH1 = document.createTextNode("Subtitulo")
    h1.appendChild(txtH1)
    div.appendChild(h1)

    ul1 = document.createElement("ul")
    div.appendChild(ul1)

    for (dato of datos){
        li1 = document.createElement("li")
        img = document.createElement("img")
        img.src = dato.src
        img.width ="300"
        li1.appendChild(img)

        img.addEventListener("click", ocultarInfo)

        p = document.createElement("p")
        txtP = document.createTextNode(dato.desc)
        p.appendChild(txtP)
        li1.appendChild(p)

        ul2 = document.createElement("ul")
        li1.appendChild(ul2)

        for(spec of dato.specs){
            li2 = document.createElement("li")
            txtLi2 = document.createTextNode(spec)
            li2.appendChild(txtLi2)
            ul2.appendChild(li2)
        }

        ul1.appendChild(li1)
    }

    function ocultarInfo(ev){
        hermanos = ev.currentTarget.parentNode.children
        hermano = ev.currentTarget.nextSibling

        for(i=0; i< hermanos.length -1; i++){

            if(hermano.style.display =="none"){
                hermano.style="display:block"
            }else{
                hermano.style="display:none"
            }
             hermano = hermano.nextSibling
            
        }
        console.log(hermanos)
    }

}