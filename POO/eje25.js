/**
 * Crear un objeto Punto con dos coordenadas (x,y) y un método para averiguar el cuadrante en el que está.
 */

class Punto{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    averiguarCuadrante(){
        if(this.x == 0 && this.y == 0){
            return(`El punto se encuentra en el origen.`)
        }else{
            if(this.x > 0 && this.y > 0){
                return (`El punto se encuentra en el primer cuadrante.`)
            }else if(this.x < 0 && this.y > 0 ){
                return(`El punto se encuentra en el segundo cuandrante.`)
            }else if(this.x < 0 && this.y < 0){
                return (`El punto se encuentra en el tercer cuadrante.`)
            }else {
                return(`El punto se encuntnra en el cuarto cuadrante.`)
            }
        }
    }

}

var coordenada = new Punto(-7,-7);
console.log(coordenada.averiguarCuadrante());












/**
 * class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function averiguarCuadrante(punto) {
    if (punto.x === 0 && punto.y === 0) {
        return (`El punto se encuentra en el origen.`);
    } else {
        if (punto.x > 0 && punto.y > 0) {
            return (`El punto se encuentra en el primer cuadrante.`);
        } else if (punto.x < 0 && punto.y > 0) {
            return (`El punto se encuentra en el segundo cuadrante.`);
        } else if (punto.x < 0 && punto.y < 0) {
            return (`El punto se encuentra en el tercer cuadrante.`);
        } else {
            return (`El punto se encuentra en el cuarto cuadrante.`);
        }
    }
}

var coordenada = new Punto(0, 0);
console.log(averiguarCuadrante(coordenada));

 * 
 */