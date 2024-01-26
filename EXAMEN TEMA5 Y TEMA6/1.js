/**
 * 
 */

window.addEventListener('load',iniciar);

function iniciar(){

    var div = document.getElementById('noticias');

    var datos = [{titular: "Noticia 1",	resumen: "Resumen de la noticia 1",descripcion: "Esta es la noticia 1"},
    {titular: "Noticia 2",resumen: "Resumen de la noticia 2",descripcion: "Esta es la noticia 2"},
    {titular: "Noticia 3",resumen: "Resumen de la noticia 3",descripcion: "Esta es la noticia 3"}];


    for(let i = 0; i < datos.length; i++){

        var div1 = document.createElement('div');
        div.appendChild(div1);

        //Creación del elemento h1, que contiene el titular de la noticia.
        var h1 = document.createElement('h1');
        var txtH1 = document.createTextNode(datos[i].titular);
        h1.appendChild(txtH1);
        div1.appendChild(h1);

        //Creacion del elemento p que contiene el resumen de la noticia.
        var p = document.createElement('p');
        var txtP = document.createTextNode(datos[i].resumen);
        p.setAttribute('id','resumen'+[i+1])
        p.appendChild(txtP);
        div1.appendChild(p);

        //Creacion del elemento img:
        var img = document.createElement('img');
        img.setAttribute('src','mostrar.jpeg');
        //img.setAttribute('name','mostrar');
        img.setAttribute('width',30);
        div1.appendChild(img)

        //Creacion del elemento h4 que contiene la descripcion de la noticia.
        var h4 = document.createElement('h4');
        var txtH4 = document.createTextNode(datos[i].descripcion);
        h4.setAttribute('style','display:none')
        h4.appendChild(txtH4);
        div1.appendChild(h4);
    }


    // Agregar evento de clic al botón de mostrar/ocultar
     var imagenes = document.getElementsByTagName('img');
    
    for(var i = 0; i < imagenes.length; i++){
        console.log(i);
        imagenes[i].addEventListener('click', imagenesOcultar);
    }


    function imagenesOcultar(e){
        var img =e.currentTarget;
        var h4 = img.nextSibling;
        console.log('pojh');
        console.log(h4);

        if (h4.style.display === 'none') {
            h4.style.display = 'block';
            img.setAttribute('src', 'ocultar.jpeg');
            img.setAttribute('name', 'ocultar');
        } else {
            h4.style.display = 'none';
            img.setAttribute('src', 'mostrar.jpeg');
            img.setAttribute('name', 'mostrar');
        }
    }
}


