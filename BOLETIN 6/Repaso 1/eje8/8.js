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

    var div = document.getElementById('todos-los-viajes');
    var h1 = document.createElement('h1');
    var txth1 = document.createTextNode('Subtitulo')
    h1.appendChild(txth1);

    div.appendChild(h1);

    var json = [
        { src: "django.jpg", desc: "descripcion1", specs: ["spec11", "spec12"] },
        { src: "js.png", desc: "descripcion2", specs: ["spec21", "spec22"] },
    ]

    console.log(json);
    var ul = document.createElement('ul');
    div.appendChild(ul);

    for(i=0; i<json.length;i++){
        let li = document.createElement('li');
        ul.appendChild(li);


        //Creamos el elemento img:
        let img = document.createElement('img');
        img.setAttribute('src',json[i].src);
        img.width = 250;
        li.appendChild(img);

        //Creamos el elemento p:
        let p = document.createElement('p');
        let txtP = document.createTextNode(json[i].desc);
        p.appendChild(txtP);
        li.appendChild(p)

        //Nuestra lista tiene una lista dentro, creamos el elemento ul
        //de la nueva lista:
        let ul2 = document.createElement('ul');
        ul2.className = 'specs';
        //ulSpecs.setAttribute('class', 'specs');
        li.appendChild(ul2);

        for(let x = 0; x< json[i].specs.length;x++){
            let liS = document.createElement('li');
            let txtLi = document.createTextNode(json[i].specs[x]);
            liS.appendChild(txtLi);
            ul2.appendChild(liS);
        }

       /**
        *  img.addEventListener('click',function(){
            toggleInfo(li);
        });
        */
    }

    var imagenes = document.getElementsByTagName('img');
    
    for(var i = 0; i < imagenes.length; i++){
        console.log(i);
        imagenes[i].addEventListener('click',imagenesOcultar);
    }
    function imagenesOcultar(ev){

        var imagen = ev.currentTarget;
        var padreImagen = imagen.parentNode;
        console.log(padreImagen);
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
}

/**
 * Añade un evento al ejercicio anterior en el que si se hace click en la imagen se oculta toda la información relacionada con esa imagen, al hacer clic de nuevo en la imagen volverá a aparecer toda la información anteriormente ocultada.
 */
/**
 * function toggleInfo(li){
    var p = li.querySelector('p');
    var ulSpecs = li.querySelector('.specs');

    if (p.style.display !== 'none') {
        p.style.display = 'none';
        ulSpecs.style.display = 'none';
    } else {
        p.style.display = 'block';
        ulSpecs.style.display = 'block';
    }

}
 */