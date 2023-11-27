/**
 * Crear un objeto Rectángulo con un constructor a partir de dos objetos Punto, con métodos para hallar el perímetro del mismo y su área. Añade también dos métodos para calcular la base y la altura del rectángulo a partir de los puntos.
 * 
 * 
class Rectangulo{
    constructor(punto1,punto2){
        this.punto1 = punto1;
        this.punto2 = punto2;
    }


    calcularBase(){
        console.log(Math.abs(this.punto1.x - this.punto2.x));
    }

    calcularAltura(){
        console.log(Math.abs(this.punto1.y - this.punto2.y));
    }


    calcularArea(){
        console.log(this.calcularBase() * this.calcularAltura());
    }
    hallarPerimetro(){
        console.log((this.calcularBase() + this.calcularAltura() )* 2);
    }
}
 */

class Rectangulo{
    constructor(punto1,punto2){
        this.punto1 = punto1;
        this.punto2 = punto2;
    }


    calcularBase(){
        return Math.abs(this.punto1.x - this.punto2.x);
    }

    calcularAltura(){
        return Math.abs(this.punto1.y - this.punto2.y);
    }


    calcularArea(){
        return this.calcularBase() * this.calcularAltura();
    }
    hallarPerimetro(){
        return (this.calcularBase() + this.calcularAltura() )* 2;
    }
}

var p1 = new Punto(1,1);
var p2 = new Punto(8,4);
var r = new Rectangulo(p1,p2);
console.log(r.calcularBase());
console.log(r.calcularAltura());
console.log(r.calcularArea());
console.log(r.hallarPerimetro());