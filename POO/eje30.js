/**
 * 
Usando una implementación de objetos ES6 para guardar la sesión de calificación de un piloto con los siguientes atributos: 
piloto; // Objeto piloto, contendrá su nombre y escudería. 
tiempo; // Contendrá los ms de la mejor vuelta 

Y teniendo un array de sesiones de calificación, usando sort(); escribir el código necesario para ordenar el array de calificación por: 

A. Tiempos. 
B. Nombre de piloto. 

Añade una función para añadir al array una sesión de calificación nueva, en caso de que no exista una sesión para ese piloto y en caso de exista, si el tiempo el nuevo tiempo es menor, se modificará el tiempo en la sesión que ya existe en el array  y otra para eliminar del array (hay que comprobar que existe, crea una función para ello).
 */


var piloto1 = new Piloto('Manuel','Red Bull ');
var piloto2 = new Piloto('Gabriela','Ferrari ');
var piloto3 = new Piloto('Diana','Mercedes ');
var piloto4 = new Piloto('Irene','Aston');

var sesion = new Sesion(piloto1, 10.2);


var sesionesC = [];
//sesionesC.push(piloto1);
console.log(sesionesC);
console.log(sesion);



function añadirSesion(){


}

//Ordenar el array de sesiones de calificaciones por tiempos y nombres:


