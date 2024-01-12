fecha = new Date(prompt("Introduzca una fecha"))

var arrFechas = []



arrFechas.push(fecha)
salir  = " "


while(salir != "s"){
    fecha = new Date(prompt("Introduzca una fecha"))
    arrFechas.push(fecha)
    salir = prompt("Desea salir (s/n)")
}

arrFechas.sort((a,b) => a - b)
tamañoArray=arrFechas.length

var mayor = new Date(arrFechas[tamañoArray-1])
var menor = new Date(arrFechas[0])

console.log(Math.abs((mayor.getTime() - menor.getTime())/ 1000))

