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
    document.getElementById("testdiv").appendChild(ul);

    // Buscamos el elemento "BMW" por su texto
    var lista = document.getElementById('lista');
    var hijos = Array.from(lista.getElementsByTagName('li'));

    for (var i = 0; i < hijos.length; i++) {
        if (hijos[i].textContent === 'BMW') {
            // Creamos nuevos elementos de la lista
            var nuevoModeloAntes = document.createElement('li');
            var txtAntes = document.createTextNode("Nuevo Modelo Antes");
            nuevoModeloAntes.appendChild(txtAntes);

            var nuevoModeloDespues = document.createElement('li');
            var txtDespues = document.createTextNode("Nuevo Modelo Después");
            nuevoModeloDespues.appendChild(txtDespues);

            // Insertamos el nuevo modelo antes y después del elemento "BMW"
            lista.insertBefore(nuevoModeloAntes, hijos[i]);
            lista.insertBefore(nuevoModeloDespues, hijos[i].nextSibling);

            break; // Terminamos el bucle después de encontrar y modificar el elemento "BMW"
        }
    }

}