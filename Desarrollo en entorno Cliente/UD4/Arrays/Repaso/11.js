cadena = "Holabuen osdia 12 43 como6 78est an"

extraeNumeros(cadena)

sumaNum = (total, num) => total + num

function extraeNumeros(cadena){

    arrCadena = cadena.split("")
    arrNum = []
    console.log(arrCadena)

    for(i of arrCadena){
        if(i > 0 || i < 0){
            
            arrNum.push(parseInt(i))
        }
    }

    console.log(arrNum)
    console.log(arrNum.reduce(sumaNum))
}


