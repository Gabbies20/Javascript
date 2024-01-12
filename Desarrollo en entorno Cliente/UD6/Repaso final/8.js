window.addEventListener("load",inicio)

    function inicio(){

        json = [{src:"imagenes/imagen1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
                {src:"imagenes/imagen2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]},
                {src:"imagenes/Imagen3.jpg", desc: "descripcion3", specs: ["spec31", "spec32"]}]

        div = document.getElementById("testdiv")
        h1 = document.createElement("h1")
        txth1 = document.createTextNode("Subtitulo")
        h1.appendChild(txth1)
        div.appendChild(h1)

        ul1 = document.createElement("ul")
        div.appendChild(ul1)

        for(dato of json){
            li1 = document.createElement("li")
            img = document.createElement("img")
            img.src = dato.src
            img.setAttribute("width", "250")
            li1.appendChild(img)

            img.addEventListener("click", ocultarHermanos)

            p = document.createElement("p")
            txtP = document.createTextNode(dato.desc)
            p.appendChild(txtP)
            li1.appendChild(p)

            ul2 = document.createElement("ul")
            ul2.setAttribute("class", "specs")
            li1.appendChild(ul2)

            for(spec of dato.specs){
                li2 = document.createElement("li")
                txtLi = document.createTextNode(spec)
                li2.appendChild(txtLi)
                ul2.appendChild(li2)
            }

            
            ul1.appendChild(li1)
        }

        function ocultarHermanos(ev){
            hermanos = ev.currentTarget.parentNode.children
            hermano = ev.currentTarget.nextSibling

            for (i=0; i< hermanos.length -1; i++){
                if(hermano.style.display == "none"){
                    hermano.style.display = "block"
                }else{
                    hermano.style.display = "none"
                }
                hermano = hermano.nextSibling
            }
        }


    }