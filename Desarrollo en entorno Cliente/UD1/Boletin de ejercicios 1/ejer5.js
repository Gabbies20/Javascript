año = parseInt(prompt("Introduce el año"));

if((año % 400 == 0) || (año % 4 == 0) && (año % 100 != 0)){
    bisiesto = true;
}else{
    bisiesto = false;
}
alert(bisiesto);