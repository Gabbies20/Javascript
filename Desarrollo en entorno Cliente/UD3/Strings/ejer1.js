palabra = prompt("Introduzca una palabra. (ULTIMO para salir)").toLowerCase()
contieneC = 0
contieneÑ = 0
contadorNombres = 0;

while(palabra != "ultimo"){
    
    if(palabra.includes("c")){
        contieneC++
    }
    if(palabra.includes("ñ")){
        contieneÑ++
    }

    contadorNombres++;
    palabra = prompt("Introduzca una palabra. (ULTIMO para salir)") .toLowerCase()
}

console.log("Palabras con c: " + contieneC)
console.log("Palabras con ñ: " + contieneÑ)
console.log("Total de palabras: " + contadorNombres)