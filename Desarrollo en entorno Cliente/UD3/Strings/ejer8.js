cadena = "Hola  como estas      tu".split(" ");
sinEspaciosDupli = ""

for(i of cadena){
    if(i != ""){
        sinEspaciosDupli+= i + " "
    }
}



console.log(sinEspaciosDupli)