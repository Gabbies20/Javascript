cadena =  "Hola mundo como estas amiga mia".toLowerCase();
caracter = "";
contador = 0;
maxCar = 0;


for(i = 0; i < cadena.length; i++){
    for(j = i; j < cadena.length; j++){

        if(cadena.charAt(j) == cadena.charAt(i)){
            contador++;
        }
    }
    if(contador > maxCar){
        maxCar = contador;
        caracter = cadena.charAt(i)
    }
    contador = 0;
}

alert("El caracter más repetido es el: " + caracter + "\nVeces que se repite: " + maxCar);