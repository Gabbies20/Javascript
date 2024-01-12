cadena = "hola buenos dias tenga usted"
contadorA=0;
contadorPalabras = 0;


indiceEspacioPrimero = 0
indiceEspacioSegundo = cadena.indexOf(" ")
palabra = cadena.substring(indiceEspacioPrimero, indiceEspacioSegundo).toLowerCase()

while(indiceEspacioSegundo != -1){

    console.log(palabra)

    if(palabra.includes("a")){
        contadorA++;
    }

    indiceEspacioPrimero = cadena.indexOf(" ", indiceEspacioSegundo)
    indiceEspacioSegundo = cadena.indexOf(" ", indiceEspacioPrimero + 1)

    palabra = cadena.substring(indiceEspacioPrimero+1, indiceEspacioSegundo).toLowerCase()

    contadorPalabras++;

}


palabra = cadena.substring(indiceEspacioPrimero + 1, cadena.length)

console.log(palabra)

console.log("Palabras que empiezan con a: " + contadorA)
console.log("Número de palabras: " + (contadorPalabras + 1))
