cadena = "Hola buenos dias  como  estas  amigo".toLocaleLowerCase()
cadena = cadena.split(' ')
contA = 0
contPalabras = 0

console.log(cadena)

for (i of cadena){
    if (i != ''){
        contPalabras++
        if(i[0] == 'a'){
            contA++
        }
    }
}

console.log(contPalabras)
console.log(contA)