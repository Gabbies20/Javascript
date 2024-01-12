//Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día, mes y año y calcule //cuál de ellas es anterior a la otra.

fecha1 = new Date(prompt("Introduzca una fecha en formato (yyyy-mm-dd)"))

fecha2 = new Date(prompt("Introduzca una fecha en formato (yyyy-mm-dd)"))

fecha1M = fecha1.getTime();

fecha2M = fecha2.getTime();

if(fecha1M > fecha2M){
    alert("La primera fecha es mayor que la segunda")
}else{
    alert("La segunda fecha es mayor que la primera")
}