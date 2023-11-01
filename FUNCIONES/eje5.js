/**
 * Hacer un programa para generar el siguiente primo a uno dado. Deben usarse funciones. 
 */


function divisores(numero){

    var d = [];

    for ( let i =1; i <= numero; i++){
        if(numero % i == 0){
            d.push(i);
        }
    }

    return d;
}

console.log(divisores(10));


function esPrimo(numero){
    if(divisores(numero).length == 2){
        return true;
    }else{
        return false;
    }
}

console.log((esPrimo(10)));


function siguientePrimo(numero){

    var i = numero +1;

    while(esPrimo(i)== false){
        i++;
    }

    return i;
}
console.log((siguientePrimo(13)))