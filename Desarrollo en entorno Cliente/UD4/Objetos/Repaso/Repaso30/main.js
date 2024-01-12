var p1 = new Piloto('Jose Antonio','Ferrari')
var p2 = new Piloto('Antonio Jose','Ferrari')
var p3 = new Piloto('Mariano Fernandes','Toyota')

var s1 = new Sesion(p1,1000)
var s2 = new Sesion(p2,4000)
var s3 = new Sesion(p3,2000)

var arrSesiones =[s1,s2]

//Ordenar por nombre de piloto
console.log(arrSesiones.sort((a,b) => a.getPiloto().getNombre().localeCompare(b.getPiloto().getNombre())))

//Ordenar por tiempo
console.log(arrSesiones.sort((a,b) => a.getTiempo() - b.getTiempo() ))

//Añadir sesion
añadirSesion()

//Elimina una sesion
//eliminarSesion(s2)

function añadirSesion(){
    //Comprueba que no existe el piloto en ninguna sesion del array
    var buscaPiloto = arrSesiones.find(sesion => sesion.getPiloto() == s3.getPiloto())
    
    //Si el piloto existe se actualizarán los dates de ese piloto
    if(buscaPiloto != undefined){
        // Sacamos el índice en el array de ese piloto
        var indicePiloto =  arrSesiones.indexOf(buscaPiloto)

        // Si el tiempo que hay almacenado es mayor que el nuevo, se actualiza por el de menor valor
        if(buscaPiloto.getTiempo() > s3.getTiempo()){
            arrSesiones[indicePiloto].tiempo = s3.getTiempo()
            
        }
    // Si el piloto no existe en el array, se añadirá al mismo
    }else{
        arrSesiones.push(s3)
    }

    console.log(arrSesiones)
}


function eliminarSesion(s){
    //Busca al piloto que se desea eliminar
    buscaSesion = arrSesiones.find(sesion => sesion == s)
       // Sacamos el índice en el array de ese piloto
    var indicePiloto =  arrSesiones.indexOf(buscaSesion)

    //Eliminamos la posición del array donde se encuentra dicho piloto
    arrSesiones.splice(indicePiloto,1)
    console.log(arrSesiones)
}
