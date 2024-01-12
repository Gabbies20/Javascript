var p1 = new Piloto('Jose Antonio','Ferrari')
var p2 = new Piloto('Antonio Jose','Ferrari')
var p3 = new Piloto('Mariano Fernandes','Toyota')

var s1 = new Sesion(p1,1000)
var s2 = new Sesion(p2,4000)
var s3 = new Sesion(p3,2000)

var arrSesiones =[s1,s2]


console.log(arrSesiones.sort((a,b) => a.getPiloto().getNombre().localeCompare(b.getPiloto().getNombre())))

console.log(arrSesiones.sort((a,b) => a.getTiempo() - b.getTiempo()))

console.log(añadirSesion(s3))


console.log(eliminarSesion(s2))

function añadirSesion(s3){
    buscarPiloto = arrSesiones.find(piloto => piloto.getPiloto() == s3.getPiloto())
    indicePiloto = arrSesiones.indexOf(buscarPiloto)

    if(buscarPiloto != undefined){

        if(arrSesiones[indicePiloto].getTiempo() > s3.getTiempo()){
            arrSesiones[indicePiloto].setTiempo(s3.getTiempo())
        }
    }else{
        arrSesiones.push(s3)
    }
    return arrSesiones
}


function eliminarSesion(s){
    buscarPiloto = arrSesiones.find(sesion => sesion == s)
    indicePiloto = arrSesiones.indexOf(buscarPiloto)

    arrSesiones.splice(indicePiloto,1)
    return arrSesiones
}