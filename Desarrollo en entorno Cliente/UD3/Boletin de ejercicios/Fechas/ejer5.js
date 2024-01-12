//Realizar un programa que muestre cuántos días faltan para el próximo cumpleaños del usuario y muestre “¡Felicidades!” si es el día señalado.



cumpleaños1 = new Date(prompt("Introduzca una fecha")).getTime();
hoy = Date.now()

tiempoFaltante = cumpleaños1 - hoy;
diasFaltantes = Math.round(tiempoFaltante / (1000 * 3600 * 24))

console.log("Días faltantes para tu cumpleaños: " + diasFaltantes)

if(diasFaltantes == 0)
    console.log("¡¡FELICIDADES!!");


