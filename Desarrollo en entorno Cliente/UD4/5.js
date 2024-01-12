console.log(siguientePrimo(10))

function siguientePrimo(num){
    n = num + 1
    primo = true
    contador = 0
    numPrimo = 0
    
    while(primo){

        for(i = 2 ; i < n; i++){
            if(n % i == 0){
                contador++
            }
        }

        if (contador == 0){
            numPrimo = n
            primo = false
            
        }else{
            n++
            contador = 0;
        }
    }
    return numPrimo
}