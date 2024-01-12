
console.log(sumaPares(6,3,7,5,2))


//Funcion para sacar los umeros pares
pares = (...num) => num[0] % 2 == 0

//Funcion para sumar los numeros
suma = (total, num) => total + num


//Funcion que toma una serie de numeros, y devuelve la suma de los pares
function sumaPares(...num){

    //Filtra los numeros pares
    resp = num.filter(pares)
    //Devuelve la usma de los numeros
    return resp.reduce(suma)
}