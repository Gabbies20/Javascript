/**
 * Implementa mediante objetos en ES6 y utilizando archivos js externos (uno para cada clase) el siguiente problema.

Deberás crear un reproductor de música como objeto, que tendrá dos propiedades un array de objetos “canciones” y un volumen que por defecto será 20. 

El objeto Cancion, debe tener dos propiedades: título e interprete. Además del constructor tendrá un método mostrarCancion().

Además el objeto Reproductor tendrá los siguientes métodos:
aumentaVolumen(): subirá el volumen en un punto y devolverá el nuevo valor del volumen.
disminuyeVolumen(): bajará el volumen en un punto y devolverá el nuevo valor del volumen.
añadeCanción (cancion): si no existe la añadirá al array. 
eliminaCanción (cancion): buscará en el array si la canción existe y si existe la eliminará del array.
mostrarLista(): mostrará la lista de canciones junto con su interprete que se van a reproducir, de la siguiente forma:
A Perfect Day – Lou Reed
Uprising – Muse 
Por una cabeza – Carlos Gardel
...
mostrarVolumen()
buscarCancion(cancion): buscará una canción y devolverá su posición en el array
ordenarCancionDesc(): que ordenará la lista de canciones por el título de canción de manera descendente


En el archivo html realiza una prueba donde se compruebe el funcionamiento del objeto reproductor y sus métodos. La lista de canciones-interpretes inicial será pedida por pantalla separadas por coma (A Perfect Day, Lou Reed) y se parará cuando se introduzca la palabra “salir”.
 */

var cancion = prompt('Ingrese el nombre de la cancion y seguido a está con un (,) el nombre de su autor:');
var lista = [];

while(cancion != 'salir'){
    
    var n_cancion = (cancion.split(','));
    let titulo = n_cancion[0];
    let interprete = n_cancion[1];

    lista.push(new Cancion(titulo,interprete));


    cancion = prompt('Ingrese el nombre de la cancion y seguido a está con un (,) el nombre de su autor:');
    

}

console.log(lista);

//Creo un objeto Reproductor de Música:
var r = new ReproductorMusica(lista,20);

//Llamó al método para aumentar volumen.
r.aumentaVolumen();

//Llamó al método para bajar volumen.
r.disminuyeVolumen();

//Creo un objeto canción para añadirla.
var c = new Cancion('Camaron','Estopa');
var c1 = new Cancion('Guajiro','Ayax')
r.añadeCancion(c);
r.añadeCancion(c);

//Llamo al método para eliminar una canción:
r.eliminaCancion(c1);


//Llamo al método para mostrar toda la Lista de Canciones:
console.log(r.mostrarLista());
r.eliminaCancion(c);
console.log(r.mostrarLista());
//Lamo al metodo pra mostrar el volumen:
console.log(r.mostrarVolumen());


//Llamo al método de buscar canción:
console.log(r.buscarCancion(c1));

//Llamo al método ordenar canciones:
r.ordenarCancionDesc();


console.log("\nLista de canciones después de ordenar de forma descendente:");
r.mostrarLista();







/**
 * // Importa la clase ReproductorMusica y la clase Cancion
// Asegúrate de que las clases estén definidas en los archivos correspondientes y exportadas correctamente
const ReproductorMusica = require('./ReproductorMusica'); 
const Cancion = require('./Cancion');

var lista = [];

// Pide al usuario que ingrese canciones y autores
var entradaUsuario = prompt('Ingrese el nombre de la canción y el nombre del autor separados por coma (o escribe "salir" para finalizar):');

while (entradaUsuario.toLowerCase() !== 'salir') {
    // Divide la entrada en nombre de la canción y nombre del autor
    var partes = entradaUsuario.split(',');

    // Verifica si se ingresaron ambos valores
    if (partes.length === 2) {
        var nombreCancion = partes[0].trim();
        var nombreAutor = partes[1].trim();

        // Crea una instancia de la clase Cancion y agrega a la lista
        var cancion = new Cancion(nombreCancion, nombreAutor);
        lista.push(cancion);
    } else {
        console.log('Formato incorrecto. Ingresa el nombre de la canción y el nombre del autor separados por coma.');
    }

    // Pide al usuario la siguiente entrada
    entradaUsuario = prompt('Ingrese el nombre de la canción y el nombre del autor separados por coma (o escribe "salir" para finalizar):');
}

// Crea una instancia de la clase ReproductorMusica con la lista de canciones y una duración predeterminada
var r = new ReproductorMusica(lista, 20);

// Muestra la lista de canciones
r.mostrarLista();



aumentarVolumen() {
    // Verifica que el volumen esté en un rango válido (por ejemplo, entre 0 y 100)
    if (this.volumen + 1 >= 0 && this.volumen + 1 <= 100) {
      this.volumen += 1;
      console.log(`Volumen aumentado a ${this.volumen}`);
    } else {
      console.log("Incremento no válido. El volumen debe estar entre 0 y 100.");
    }
 */