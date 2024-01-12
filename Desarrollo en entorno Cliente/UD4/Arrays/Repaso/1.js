
console.log(elMenor(5,8,3,4))


//Funcion normal
function elMenor(...num){
    return Math.min(...num)
}

//Funcion flecha
elMenor = (...num) => Math.min(...num)

console.log(elMenor(5,8,3,4))
