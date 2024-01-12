fecha = new Date(prompt("Introduzca una fecha"))
menor = fecha
mayor = fecha

salir  = " "

while (salir != "s"){

    fecha = new Date(prompt("Introduzca una fecha"))

    if(fecha > mayor){
        mayor = fecha
    }else if(fecha < menor){
        menor = fecha
    }

    salir = prompt("desea salir")
}

console.log(mayor)
console.log(menor)