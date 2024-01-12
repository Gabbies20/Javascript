cadena = "Buenos disdda".toLowerCase().replace(/ /g, "").split("").sort()
caracter = cadena[0]
maxCaracter = 0
carMasRepetido = "";
contador = 0;

for(i of cadena){
    if(caracter == i){
        contador++
    }else{
        if(contador > maxCaracter){
            maxCaracter = contador
            carMasRepetido = caracter
        }
        caracter = i 
        contador = 0;
    }


}


console.log(carMasRepetido)
console.log(maxCaracter+1)