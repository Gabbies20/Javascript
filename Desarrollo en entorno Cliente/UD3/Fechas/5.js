//Realizar un programa que muestre cuántos días faltan para el próximo cumpleaños del usuario y muestre “¡Felicidades!” si es el día señalado.

cumpleaños = new Date("2023-09-24").getTime();
hoy = new Date("2022-10-19").getTime();

tiempoFaltante = cumpleaños - hoy;
diasFaltantes = Math.round(tiempoFaltante / (1000 * 3600 * 24))

console.log("Días faltantes para tu cumpleaños: " + diasFaltantes)

if(diasFaltantes == 0)
    console.log("¡¡FELICIDADES!!");


