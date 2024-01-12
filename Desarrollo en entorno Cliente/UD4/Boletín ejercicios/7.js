console.log(esPrimo(7))

function esPrimo(num){
    primo = true;
    for(let i = num - 1; i > 1; i--){
        if(num % i == 0){
            primo = false
            break;
        }
    }

    if (!primo){
        return 'El numero no es primo'
    }else{
        return siguientePrimo(num)
    }
}

function siguientePrimo(num){
    
    i = 2
    primo = true
    contador = 0

    return n
}