/*
Realizar la función esPalindromo(cadena) de manera recursiva. 
*/
function esPalidroma(palabra){
    if(palabra.length <= 1){
        return true;
    }else if(palabra[0]==palabra[palabra.length-1]){
        return esPalidroma(palabra.slice(1,palabra.length-1));
    }else{
        return false;
    }
}

console.log(esPalidroma('aeiouoiea'));




