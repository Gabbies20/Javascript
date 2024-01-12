window.addEventListener('load',inicio);

function inicio(){

    //Creamos las lista:
    var ul = document.createElement('ul');
    ul.id = 'lista';
    ul.style = 'list-style-type:square';

    //Creamos los elemenentos de la lista:
    var li = document.createElement('li');
    li.id = 'elemento';

    //Creamos el nodo texto para nuestro elemento 'li';
    var txt1 = document.createTextNode("BMW")
    li.appendChild(txt1)
    ul.appendChild(li)


    //Añadimos todo a nuestro div.
    document.getElementById("testdiv").appendChild(ul)
}