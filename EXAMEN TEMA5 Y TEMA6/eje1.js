window.addEventListener('load', iniciar);

function iniciar(){
    
    var json = [{titular: "Noticia 1",    resumen: "Resumen de la noticia 1",
    descripcion: "Esta es la noticia 1"},{titular: "Noticia 2",resumen: "Resumen de la noticia 2",
    descripcion: "Esta es la noticia 2"},{titular: "Noticia 3",resumen: "Resumen de la noticia 3",
    descripcion: "Esta es la noticia 3"}];

    var div1 = document.getElementById("noticias");

    for (var i = 0; i < json.length; i++) {

        var div2 = document.createElement("div");
        div2.setAttribute("id",`noticia${i+1}`);
        div1.appendChild(div2);
        
        var h1 = document.createElement("h1");
        var txt1 = document.createTextNode(json[i].titular);
        h1.appendChild(txt1)
        div2.appendChild(h1)
        
        var p = document.createElement("p");
        p.setAttribute("id",`resumen${i+1}`);
        p.textContent = json[i].resumen;
        div2.appendChild(p);
        
        var imagen = document.createElement("img");
        imagen.setAttribute('src','mostrar.jpeg')
        imagen.setAttribute('name','mostrar')
        imagen.setAttribute('width','30')
        div2.appendChild(imagen)

        var h4 = document.createElement("h4");
        h4.setAttribute('style','display:none;')
        h4.textContent=json[i].descripcion;
        div2.appendChild(h4);


        imagen.addEventListener('click',mostrar);


    }

}

function mostrar(e){
    var imagen = e.currentTarget
    var h4 = imagen.nextSibling

    if (imagen.getAttribute('src') == 'mostrar.jpeg'){
        h4.setAttribute('style','display:block;')
        imagen.setAttribute('src','ocultar.jpeg')
    } else {
        h4.setAttribute('style','display:none;')
        imagen.setAttribute('src','mostrar.jpeg')
    }
}