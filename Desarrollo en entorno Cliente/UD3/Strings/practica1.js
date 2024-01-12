cuadernos = parseInt(30);
opcion = "d";

while (opcion != "c") {
    
    opcion = prompt("1. Entrega de cuadernos " + "\n"
            + "2. Recepción de cuadernos " + "\n" 
            + "c. Salir" + "\n"
            + "Total actual de cuadernos: " + cuadernos);
        
    if (opcion == "1") {
        eCuadernos = parseInt(prompt("Cuantos cuadernos desea entregar"));
        cuadernos -= eCuadernos;
    }else if (opcion == "2") {
        rCuadernos = parseInt(prompt("Cuantos cuadernos desea recepcionar"));
        cuadernos += rCuadernos;
    }

    if (cuadernos > 30) {
        alert("El máximo de cuadernos permitidos es 30. Se ajustará la cantidad a este valor")
        cuadernos = 30;
    }else if (cuadernos < 10) {
        while(cuadernos < 10){
            if (cuadernos < 0) {
                cuadernos = 0;
            }
            rCuadernos = parseInt(prompt("Se ha alcanzado el stock mínimo de cuadernos (10). Actualmente hay: " + cuadernos + "\n"
            + "Cuantos cuadernos desea entregar"));
            cuadernos+=rCuadernos;
        }
        if(cuadernos > 30){
            alert("El máximo de cuadernos permitidos es 30. Se ajustará la cantidad a este valor")
            cuadernos = 30;
        }
    }

}
