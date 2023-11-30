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


    /**
     * devuelva un valor verdadero. Si es así, find devuelve inmediatamente el valor del elemento. En caso contrario, find devuelve undefined. 
     */
    añadeCancion(cancion) {
        var r = this.canciones.find((e) => e.titulo === cancion.titulo);
    
        if (!r) {
            this.canciones.push(cancion);
            console.log(`Canción añadida: ${cancion.titulo}`);
        } else {
            console.log(`La canción "${cancion.titulo}" ya existe en este dispositivo.`);
        }
    }
    

    eliminaCancion(cancion){
        var r = this.canciones.find((e) => e.titulo === cancion.titulo);

        if(!r){
            this.canciones.splice(this.canciones.indexOf(r),1);
            console.log(`Canción "${cancion.titulo}" eliminada.`);
        }else{
            console.log(`La canción con "${cancion.titulo}" no existe.`);
        }

    }   


    mostrarLista(){

        //document.write(`---LISTA CANCIONES--- <br>`)
        this.canciones.forEach(cancion => {
            document.write(`Título: ${cancion.titulo}, Interprete: ${cancion.interprete} <br>`);
    });
    }

    mostrarVolumen(){
        return document.write(`<br> VOLUMEN:  ${this.volumen}.`)
    }

    buscarCancion(cancion){
        var r = this.canciones.find((e) => e.titulo === cancion.titulo);

        return {
            toString: () => r ? `Titulo: ${resultado.titulo}, Interprete${r.interprete}` : 'Canción no encontrada.'
        };




    }

    ordenarCancionDesc(){
        console.log(`Ordenando..`);
        this.canciones.sort((a,b)=> a.titulo.localeCompare(b.titulo));
    }


}