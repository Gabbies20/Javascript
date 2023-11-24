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
var piloto3 = new Piloto('Diana','Mercedes');
var piloto4 = new Piloto('Irene','Aston');
var piloto5 = new Piloto('Alvaro','Red Bull');

var sesion1 = new Sesion(piloto1,100);
var sesion2 = new Sesion(piloto1,50);
var sesion3 = new Sesion(piloto2,25);
var sesion4 = new Sesion(piloto4,400);
var sesion5 = new Sesion(piloto5,100);
var sesionesC = [];


//sesionesC.push(piloto1);
//console.log(sesionesC);
//console.log(sesion);


//console.log(sesionesC);

function añadirSesion(sesion){
    
    var resultado = sesionesC.find((e)=>e.piloto.nombre==sesion.piloto.nombre);
    
    if (resultado){
        if(sesion.tiempo < resultado.tiempo){
            sesionesC.splice(sesionesC.indexOf(resultado), 1, sesion);
        }
    }else{
        sesionesC.push(sesion);
    }
}


function eliminarSesion(sesion){

    var resultado = sesionesC.find((e) => e == sesion);
    if(resultado){
        sesionesC.splice(sesionesC.indexOf(resultado),1);
    }else{
        console.log(`La sesion no existe.`);
    }

}

function ordenarTiempos(lista){
    return (lista.sort((a,b)=> b.tiempo - a.tiempo ));
}

function oredenarNombres(lista){
    return (lista.sort((a,b) => {
        if(a.piloto.nombre < b.piloto.nombre){
            return -1;
        }
        if(a.piloto.nombre > b.piloto.nombre){
            return 1;
        }
    }));

    /**
     * ((a,b)=>a.piloto.nombre.localCompare(b.piloto.nombre))
     */
}

añadirSesion(sesion1);
añadirSesion(sesion2);
añadirSesion(sesion3);
añadirSesion(sesion5);
console.log(sesionesC);

//console.log(eliminarSesion(sesion4));
console.log(ordenarTiempos(sesionesC));
console.log(oredenarNombres(sesionesC));
//Ordenar el array de sesiones de calificaciones por tiempos y nombres:


