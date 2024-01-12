palabra = prompt("Introduzca la palabra")
palabraMin = palabra.toLowerCase();
palabraInv = "";

for(i = parseInt(0); i < palabra.length; i++){
    palabraInv += palabraMin.charAt(palabraMin.length - i);
}

palabraInv += palabraMin.charAt(palabraMin.length - i);


if(palabraMin.match(palabraInv)){
    alert(palabra + " es un palindromo")
}else{
    alert(palabra + " no es un palindromo")
}

