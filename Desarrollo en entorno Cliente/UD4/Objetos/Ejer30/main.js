p1 = new Piloto('Jose Antonio','Ferrari')
p2 = new Piloto('Antonio Jose','Ferrari')
p3 = new Piloto('Mariano Fernandes','Toyota')



s1 = new Sesion(p1,1000)
s2 = new Sesion(p2,4000)
s3 = new Sesion(p3,3000)


arrSesiones = [s1,s2]

arrSesiones.sort((a,b) => a.getPiloto().getNombre().localeCompare(b.getPiloto().getNombre()))
//console.log(arrSesiones)


arrSesiones.sort((a,b) => b.getTiempos() - a.getTiempos())
//console.log(arrSesiones)

agregaSesion()
eliminarSesion(s3)



function agregaSesion(){
    var objeto = arrSesiones.find(sesion => sesion == s3)
    var tiempo;
    //console.log(objeto)

    
    if(arrSesiones.find(sesion => sesion == s3) == objeto){

        if(arrSesiones.find(sesion => sesion.getPiloto() == s3.getPiloto()) != objeto){
            
            tiempo = arrSesiones.find(sesion => sesion.getPiloto() == s3.getPiloto()).getTiempos()
            if(tiempo > s3.getTiempos()){
                objeto = arrSesiones.find(sesion => sesion.getPiloto() == s3.getPiloto())
                objeto.tiempos = s3.getTiempos()
                
            }      
        }else{
            arrSesiones.push(s3)
        }
       
    }else{
        console.log("La sesion ya existe")
    }
}



function eliminarSesion(sesion){
    indiceSesion = arrSesiones.indexOf(arrSesiones.find(s => s == sesion))
    arrSesiones.splice(indiceSesion,1)
    console.log(arrSesiones)

}
console.log(arrSesiones)
