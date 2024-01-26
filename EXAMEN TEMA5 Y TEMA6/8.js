/**
 * 
 */

window.addEventListener('load',iniciar);

function iniciar(){

    var div = document.getElementById('todos-los-viajes');

    var datos = [
        {src:"mostrar.jpeg", desc: "descripcion1", specs: ["spec11", "spec12"]},
        {src:"ocultar.jpeg", desc: "descripcion2", specs: ["spec21", "spec22"]},
        ];

    //Crear el elelmento h1 para el subtitulo:
    var h1 = document.createElement('h1');
    var txtH1 = document.createTextNode('Subtitulo');
    h1.appendChild(txtH1);
    div.appendChild(h1);


    //Creamos la lista:
    var ul = document.createElement('ul');
    div.appendChild(ul);


    for(let i = 0; i < datos.length; i++){
        console.log(i);

        var li = document.createElement('li');
        var img = document.createElement('img');
        img.setAttribute('src',datos[i].src);
        img.width = 50;
        li.appendChild(img);
        var p = document.createElement('p');
        var txtP = document.createTextNode(datos[i].desc);
        p.appendChild(txtP);
        ul.appendChild(p);
        ul.appendChild(li);

        var ul2 = document.createElement('ul');
        for( x in i.specs){

            let li = document.createElement('li');
            let txtLi = document.createTextNode(datos[i].specs)
        }



    }
        
}