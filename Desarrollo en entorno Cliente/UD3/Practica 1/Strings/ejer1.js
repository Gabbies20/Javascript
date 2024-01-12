palabra = "";
contÑ = 0;
contC = 0;
contador = 0;

while (palabra != "ultimo") {
    palabra = prompt("Introduzca una palabra").toLowerCase();
    
    contador++;

    if(palabra.indexOf('c') != -1)
        contC++

    if(palabra.indexOf('ñ') != -1)
        contÑ++

}

console.log(contador - 1)
console.log(contC)
console.log(contÑ)