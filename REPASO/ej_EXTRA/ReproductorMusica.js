class ReproductorMusica{
    constructor(canciones,volumen = 20){
        this.canciones = canciones;
        this.volumen = volumen;
    }

    aumentaVolumen(){
        this.volumen++;
        return alert(`Subiendo volumen, su volumen actual es de: ${this.volumen}`);
    }

    disminuyeVolumen(){
        this.volumen--;
        return alert(`Bajando volumen, su volumen ahora es de ${this.volumen}`);
    }

    añadeCancion(cancion){

        var r = this.canciones.find((e) =>{
            e.titulo === cancion.titulo;
            console.log(r);
        });


        if(!r){
            this.canciones.push(cancion);
        }else{
            document.write(`La canción ya existe en este dispositivo. <br>`)
        }

    }

    eliminaCancion(){

    }   



    mostrarLista(){

        document.write(`---LISTA CANCIONES--- <br>`)
        this.canciones.forEach(cancion => {
            document.write(`Nombre: ${cancion.titulo}, Artista: ${cancion.interprete} <br>`);
    });
    }

    mostrarVolumen(){

    }

    buscarCancion(){

    }

    ordenarCancionDesc(){

    }


}