
//CLASE PUNTO
class Punto{
    constructor(x,y){
        this.x = x;
        this.y = y;
    };


    cuadrante(){
        
        if(this.x > 0 && this.y > 0){
            this.cuadrante = "Primer cuadrante"
        }else if(this.x < 0 && this.y > 0){
            this.cuadrante = "Segundo cuadrante"
        }
        else if(this.x < 0 && this.y < 0){
            this.cuadrante = "Tercer cuadrante"
        }else if(this.x > 0 && this.y < 0){
            this.cuadrante = "Cuarto cuadrante"
        }else{
            this.cuadrante = "No hay coordenadas especificadas"
        }

        return this.cuadrante
    };
}

//CLASE RECTÁNGULO
class Rectangulo extends Punto{
    constructor(punto1, punto2){
        super(punto1,punto2)
        this.punto1 = punto1
        this.punto2 = punto2
    }  
    base(){
        return Math.abs(this.punto2.x - this.punto1.x)
    }

    altura(){
        return Math.abs(this.punto2.y - this.punto1.y)
    }

    perimetro(){
        return (this.base() + this.altura())*2
    }

    area(){
        return this.base() * this.altura()
    }
}


punt1 = new Punto(4,12)
punt2 = new Punto(50,33)

rect = new Rectangulo(punt1,punt2)

console.log(rect.perimetro())
console.log(rect.area())

console.log(punt1.cuadrante())

