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

    datosJson=[{src:"../imagenes/imagen1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
                {src:"../imagenes/imagen2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]}]


    div = document.createElement("div")
    div.id = "testdiv"

    document.getElementsByTagName("body")[0].appendChild(div)

    h1 = document.createElement("h1")
    txtH1 = document.createTextNode("Subtitulo")
    h1.appendChild(txtH1)
    div.appendChild(h1)
    
    ul1 = document.createElement("ul")
    div.appendChild(ul1)
    
    for (i of datosJson){
        li1 = document.createElement("li")

        img = document.createElement("img")
        img.width = "300"
        img.src = i.src
        li1.appendChild(img)

        img.addEventListener("click", ocultarInfo)

        p = document.createElement("p")
        txtP = document.createTextNode(i.desc)
        p.appendChild(txtP)
        li1.appendChild(p)

        ul2 = document.createElement("ul")
        ul2.setAttribute('class', 'specs');
        li1.appendChild(ul2)

        for (j of i.specs){
            li2 = document.createElement("li")
            txtLi = document.createTextNode(j)            
            li2.appendChild(txtLi)
            ul2.appendChild(li2)
        }

        ul1.appendChild(li1)
    }
    
    
    // Ejer 9

    /*

    Añade un evento al ejercicio anterior en el que si se hace click en la imagen se oculta toda la 
    información relacionada con esa imagen, al hacer clic de nuevo en la imagen volverá a aparecer toda 
    la información anteriormente ocultada.

    */

    function ocultarInfo(ev){
        console.log(ev.currentTarget.nextSibling)
        hermano = ev.currentTarget.nextSibling
        padre = hermano.parentNode
        numero_hermanos=padre.children.length -1

        for(i=0; i < numero_hermanos; i++){

            if(hermano.style.display == "none"){
                hermano.style="display:block"
            }else{
                hermano.style="display:none"
            }
            hermano = hermano.nextSibling
 
        }
    }

}