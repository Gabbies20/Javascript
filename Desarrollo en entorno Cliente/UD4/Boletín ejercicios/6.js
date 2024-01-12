console.log(sumaParam(5,9,10,9.8))

function sumaParam(...numeros){
    let total = numeros.reduce((a, b) => a + b);
    return total;
}

