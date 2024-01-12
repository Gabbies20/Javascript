
console.log(esPerfecto(496))

function esPerfecto(num){
    perfecto = false;
    suma = 0

    for(i = 0; i < num; i++){
        if(num % i == 0){
            suma += i
            console.log(i)
        }
    }
    if(suma == num){
        perfecto = true
    }
    return perfecto
}