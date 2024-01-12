console.log(sumaArgPares(2,6,7,5,9,10))

function sumaArgPares(...num){
    var suma = 0

    for (let i of num) {
        if(i % 2 == 0){
            suma += i
        }
    }

    return suma
}