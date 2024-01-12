console.log(elMenor(4,7,3,1,2,4,6))

function elMenor(...numeros){
    numeros = numeros.sort()

    return numeros[0]
}