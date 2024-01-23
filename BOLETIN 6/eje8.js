/**
 * Crear mediante DOM y a partir del siguiente array de objetos expresado en formato JSON:
[
{src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12", ...]},
{src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22", ...]},
...
]


 */

window.addEventListener('load', iniciar);


function iniciar() {


    var datosJson = [
        { src: "django.jpg", desc: "descripcion1", specs: ["spec11", "spec12"] },
        { src: "js.png", desc: "descripcion2", specs: ["spec21", "spec22"] },
    ];


    var div = document.getElementById('todos-los-viajes');
    var ul = document.createElement('ul');
    div.appendChild(ul);
    console.log(div.title);

    for (e of datosJson) {
        console.log(e);
        var li = document.createElement('li');
        ul.appendChild(li)

        var img = document.createElement('img');
        img.src = e.src;
        img.width = "250";
        li.appendChild(img);

        var p = document.createElement('p');
        var contenido = document.createTextNode(e.desc);
        p.appendChild(contenido);
        li.appendChild(p)

        var ul2 = document.createElement('ul');
        //La lista contiene una nueva lista:
        li.appendChild(ul2)
        for (i of e.specs) {
            var li = document.createElement('li')
            //crear la clase para mi etiqueta li:
            ul2.setAttribute('class', 'specs')
            ul2.appendChild(li);
            var contenido = document.createTextNode(i);
            li.appendChild(contenido)

        }

        

    }

    var imagenes = document.getElementsByTagName('img');
    
    for(var i = 0; i < imagenes.length; i++){
        console.log(i);
        imagenes[i].addEventListener('click',imagenesOcultar);
    }
    function imagenesOcultar(ev){

        var imagen = ev.currentTarget;
        var padreImagen = imagen.parentNode;
        var hijosChildren = [...padreImagen.childNodes].filter((h) => {
            r = h != imagen;
            return r;
        })

        
        console.log(hijosChildren);


        //ev.currentTarget.style.display = 'none';

        for(e of hijosChildren){
            //e.style.display = 'none';
            if(e.style.display != 'none'){
                e.style.display = 'none';
            }else{
                e.style.display = 'block';
            }
        }


    }

    var example = document.getElementById('exampleId');
example.textContent = '<a href="https://google.com">google</a>';
//output: <a href="http://google.com">google</a>
example.innerHTML = '<a href="https://google.com">google</a>';

}




