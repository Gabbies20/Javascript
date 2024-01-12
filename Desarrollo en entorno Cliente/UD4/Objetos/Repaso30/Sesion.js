class Sesion{
    constructor(piloto,tiempo){
        this.piloto = piloto
        this.tiempo = tiempo
    }


    getPiloto(){
        return this.piloto
    }


    getTiempo(){
        return this.tiempo
    }

    setTiempo(nuevoTiempo){
        return this.tiempo = nuevoTiempo
    }
}