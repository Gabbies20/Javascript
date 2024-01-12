//Realiza un algoritmo que solicite del usuario un tiempo dado en segundos y calcule y presente en pantalla dicho tiempo pero expresado en horas, minutos y segundos.

segundos = parseInt(prompt("Introduzca los segundos"))

fecha = new Date(segundos * 1000);
tiempo =  `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;


console.log(tiempo) 