

contadorC = parseInt(0);
contadorÑ = parseInt(0);
nombre = "";

while (!nombre.match("Ultimo")) {
    nombre = prompt("Introduzca un nombre")
    C = nombre.charAt(0)
    Ñ = nombre.indexOf("ñ");

    if (C == "C") {
        contadorC++;
    }

    if(Ñ != -1){
        contadorÑ++
    }
}

alert(contadorC);
alert(contadorÑ);