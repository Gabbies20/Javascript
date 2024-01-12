numeros = prompt("Introduzca una serie de numeros").split(' ')

console.log(creaArray(numeros))


function creaArray(numeros){
    arrN = []

    for(let i of numeros){
        arrN.push(parseInt(i))
    }

    arrN = arrN.reduce(suma)

    return arrN
}


function suma(total, num){
    return total + num
}   

