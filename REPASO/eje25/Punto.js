/**Crear un objeto Punto con dos coordenadas (x,y) y un método para averiguar el cuadrante en el que está. */

class Punto{
    constructor(coordenada_x,coordenada_y){
        this.x=coordenada_x;
        this.y=coordenada_y;
    }

    averiguarCuadrante(x,y){
        if(this.x == 0 && this.y == 0){
            return (`Se encuentra en el punto de origen (0,0).`)
        }else{
            if( this.x > 0 && this.y > 0){
                return(`Se encuentra en el primer cuadrante.`)
            }else if(this.x < 0 && this.y > 0){
                return(`Se encuentra en el segundo cuadrante.`)
            }else if(this.x < 0 && this.y < 0){
                return (`Se encuentra en el tercer cuadrante.`)
            }else{
                return (`Se encuentra en el cuarto cuadarante.`)
            }
        }
    }
}