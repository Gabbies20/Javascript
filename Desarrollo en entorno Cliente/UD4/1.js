console.log(numPerfe(6))

function numPerfe(num) {
    esPerfecto = false;
    suma = 0;
    
    for(let i = num - 1; i > 0; i--){
        if (num % i == 0){
            suma+=i
            console.log(i)
        } 
    }

    if (suma == num){
        esPerfecto = true
    }

    return esPerfecto
}