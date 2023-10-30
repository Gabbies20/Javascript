/**
 * Hacer un programa que compruebe si un número es perfecto. Deberá implementarse una función esPerfecto(numero) que devuelva true si lo es.
 */
var total = 0;

function esPerfecto(numero){
    for(let i = 1; i < numero; i++){
        if(numero % i ==0){
            total += i;
            //console.log(total)
        }
        
    }
    if(total === numero){
        return  `El numero ${numero} es perfecto.`;
    }
    else{
        return `El numero ${numero} no es perfecto.`;
    }
}

var resultado = esPerfecto(6);
console.log(resultado)
