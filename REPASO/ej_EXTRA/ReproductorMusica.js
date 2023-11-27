class ReproductorMusica{
    constructor(canciones,volumen = 20){
        this.canciones = canciones;
        this.volumen = volumen;
    }

    aumentaVolumen(){

    }

    disminuyeVolumen(){

    }

    añadeCancion(){

    }

    eliminaCancion(){

    }

    mostrarLista(){
        var lista = this.canciones.forEach(cancion => {
            console.log(`Nombre: ${cancion.titulo}, Artista: ${cancion.interprete}`);
    });
    }

    mostrarVolumen(){

    }

    buscarCancion(){

    }

    ordenarCancionDesc(){

    }

}