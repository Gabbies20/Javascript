cadena = "aaaaa adsafaraweaaaa dddeeeed".split('')
cadena = cadena.filter(caracter => caracter != ' ').sort()
listaCadena = new Set(cadena)
max = 0
caracter = ""

//console.log(listaCadena)

for (i of listaCadena){
    if ((cadena.filter(car => car == i).length) > max){
        max = cadena.filter(car => car == i).length
        caracter = i
    }

}

console.log(caracter)