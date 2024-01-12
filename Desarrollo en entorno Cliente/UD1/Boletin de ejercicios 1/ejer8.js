num = parseInt(prompt("Introduzca los n primeros numeros naturales"));
suma = parseInt(0);

for(var i = parseInt(1); i <= num; i++){
    suma += i;
    cuadrado = Math.pow(i,2);
    cubo = Math.pow(i,3);
    alert("Número: " + i + "\n" + "Cuadrado: " + cuadrado
            + "\n" + "Cubo: " + cubo);
}
    alert("Suma total: " + suma);