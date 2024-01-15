/**
 * 
Crea un página con un div y a medida que mueves el ratón por la pantalla, dentro de el div se visualizan las coordenadas.

 */

window.addEventListener('load',iniciar);

function iniciar(){

    var div = document.getElementById('elemento');
    var p = document.createElement('p');

    div.addEventListener('mouseover',(e) =>{

        //Evento mouseover -> cuando entra.
        var x = e.clientX;
        console.log(x);
        var y = e.clientY;
        console.log(y);

        //document.write(`La coordenada  x es: ${x}`);
        //document.write(`La coordenada y es: ${y}`);

    
    var text1 = document.createTextNode('La coordenada x es: ${x} y la coordenada y es: ${y}');
    p.appendChild(text1);

    });
    
}