/**
 * Crear mediante DOM y a partir del siguiente array de objetos expresado en formato JSON:
[
{src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12", ...]},
{src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22", ...]},
...
]


 */

window.addEventListener('load',inicio);


function inicio(){


    var datosJson = [
        {src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
        {src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]},
        ];


    var div = document.getElementById('todos-los-viajes');
    var ul = document.createElement('ul');
    div.appendChild(ul);
    console.log(div.title);

    for (e of datosJson ){
        console.log(e);
        var li = document.createElement('li');
        ul.appendChild(li)

        var img = document.createElement('img');
        img.src = e.src;
        li.appendChild(img)

        var p = document.createElement('p');
        var contenido = document.createTextNode(e.desc);
        p.appendChild(contenido);
        li.appendChild(p)

        var ul2 = document.createElement('ul');
        for(i of e.specs){
            var li = document.createElement('li')
            
        }

    }
}




    