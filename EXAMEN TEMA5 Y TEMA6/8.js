/**
 * 
 */

window.addEventListener('load', iniciar);

function iniciar() {

    var div = document.getElementById('todos-los-viajes');

    var datos = [
        { src: "mostrar.jpeg", desc: "descripcion1", specs: ["spec11", "spec12"] },
        { src: "ocultar.jpeg", desc: "descripcion2", specs: ["spec21", "spec22"] },
    ];

    //Crear el elelmento h1 para el subtitulo:
    var h1 = document.createElement('h1');
    var txtH1 = document.createTextNode('Subtitulo');
    h1.appendChild(txtH1);
    div.appendChild(h1);


    //Creamos la lista:
    var ul = document.createElement('ul');
    div.appendChild(ul);


    for (let i = 0; i < datos.length; i++) {
        console.log(i);

        var li = document.createElement('li');
        ul.appendChild(li);
        var img = document.createElement('img');
        img.setAttribute('src', datos[i].src);
        img.width = 50;
        li.appendChild(img);

        //creo elemento p para descripcion
        var p = document.createElement('p');
        var txtP = document.createTextNode(datos[i].desc);
        p.appendChild(txtP);
        li.appendChild(p);


        var ul2 = document.createElement('ul');
        li.appendChild(ul2);
        for (x of datos[i].specs) {
            var li1 = document.createElement('li');
            ul2.className = 'specs'
            ul2.appendChild(li1)
            var txtLi = document.createTextNode(x);
            li1.appendChild(txtLi);
        }

        /**
         * for(let j = 0; j < datos[i].specs.length; j++){
            var li1 = document.createElement('li');
            li1.className = 'specs';
            ul2.appendChild(li1);
            var txtLi = document.createTextNode(datos[i].specs[j]);
            li1.appendChild(txtLi);
        }
         */


        img.addEventListener('click', ocultarInformacion);




        function ocultarInformacion(e) {
            var img = e.currentTarget;
            var padre = img.parentNode
            console.log(img);
            console.log(padre);
            console.trace()


            //Obtener los hermanos de la etiquetan img:
            //padre.childNodes devuelve una colección de todos los nodos secundarios (hijos) del elemento padre (<li> en este caso). 
            // Obtener todos los nodos secundarios del elemento padre
            var padreChildNodes = padre.childNodes;
            console.log("padreChildNodes:");
            for (var i = 0; i < padreChildNodes.length; i++) {
                console.log(padreChildNodes[i]);
            }



            var hijosChildren = [...padre.childNodes].filter((h) => {
                r = h != img;
                return r;
            })


            console.log(hijosChildren);


            //Como hijosChildren es un array debo recorrerlos:
            for(hijo of hijosChildren){
                //e.style.display = 'none';
                if(hijo.style.display != 'none'){
                    hijo.style.display = 'none';
                }else{
                    hijo.style.display = 'block';
                }
            }
        }

    }

}