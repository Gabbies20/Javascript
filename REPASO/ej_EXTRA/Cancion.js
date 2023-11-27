class Cancion{
    constructor(titulo,interprete){
        this.titulo = titulo;
        this.interprete = interprete;
    }


    mostrarCancion(){
        let cadena = '';
        cadena += this.titulo + "-" +this.interprete;
        return cadena;
    }
}