cumpleaños = new Date("2022-11-14").getTime()

hoy = new Date().getTime()

tiempoFaltante =cumpleaños - hoy;
diasFaltantes = Math.ceil(tiempoFaltante / (1000 * 3600 * 24))

console.log("Días faltantes para tu cumpleaños: " + diasFaltantes)


if(diasFaltantes == 0){
    console.log("Felicidades")
}

