frase = prompt("Introduzca una frase")
contPalabras = parseInt(0)
contA = parseInt(0)
indiceInicial = 0;

while(frase.indexOf(" ", indiceInicial) != -1){

    palabra = frase.slice(indiceInicial, frase.indexOf(" ", indiceInicial)+1)
    indiceInicial = frase.indexOf(" ", indiceInicial)+1;
    palabra = palabra.toLowerCase()
    if(palabra.indexOf("a") != -1){
        contA++;
    }
    contPalabras++;

    if(frase.indexOf(" ", indiceInicial) == -1){
        palabra = frase.slice(indiceInicial, frase.length);
        if(palabra.indexOf("a") != -1){
            contA++;
        }
        contPalabras++;
    }

        
}

alert("Cantidad de palabras: " + contPalabras + "\n"
        + "Palabras que empiezan por A: " + contA);