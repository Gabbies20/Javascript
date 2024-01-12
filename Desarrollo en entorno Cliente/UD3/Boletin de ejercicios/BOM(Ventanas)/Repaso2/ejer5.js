fecha = new Date().toLocaleTimeString()
console.log(fecha)

temporizador = () => console.log(new Date().toLocaleTimeString())


setInterval(temporizador,60000)

