/**
 * Crear un objeto Rectángulo con un constructor a partir de dos objetos Punto, con métodos para hallar el perímetro del mismo y su área. Añade también dos métodos para calcular la base y la altura del rectángulo a partir de los puntos.
 */

class Rectangulo{
    constructor(punto1,punto2){
        this.punto1 = punto1;
        this.punto2 = punto2;
    }

    calcularBase(){
        return this.punto2.x - this.punto1.x;
    }

    calcularAltura(){
        return this.punto1.y - this.punto2.y;
    }

    hallarPerimetro(){
        let base = this.calcularBase();
        let altura = this.calcularAltura();

        return (base + altura) * 2;
    }

    hallarArea(){
        let base = this.calcularBase();
        let altura = this.calcularAltura();

        return base * altura;
    }

}


