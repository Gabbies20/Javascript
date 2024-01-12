
fechaCorrecta = false;

while(!fechaCorrecta){
    alert("Primera fecha")
    dia = prompt("Introduzca el dia")
    mes = prompt("Introduzca el mes")
    año = prompt("Introduzca el año")

    if((dia <= 0 || dia > 31) || (mes <= 0 || mes > 12)){
        alert("Fecha incorrecta")
    }else{
        fechaCorrecta = true;
    }

}
fechaCorrecta = false;

while(!fechaCorrecta){
    alert("Segunda fecha")
    dia1 = prompt("Introduzca el dia")
    mes1 = prompt("Introduzca el mes")
    año1 = prompt("Introduzca el año")

    if((dia <= 0 || dia > 31) || (mes <= 0 || mes > 12)){
        alert("Fecha incorrecta")
    }else{
        fechaCorrecta = true;
    }

}

if (año == año1) {
    if (mes == mes1) {
        if (dia == dia1) {
            alert("Las fechas son iguales")
        }else if(dia > dia1){
            alert("Fecha anterior: " + dia1 + "/" + mes1 + "/" + año1)
            
        }else{
            alert("Fecha anterior: " + dia + "/" + mes + "/" + año)
        }
    }else if(mes > mes1){
        alert("Fecha anterior: " + dia1 + "/" + mes1 + "/" + año1)
            
    }else{
        alert("Fecha anterior: " + dia + "/" + mes + "/" + año)
    }
}else if(año > año1){
    alert("Fecha anterior: " + dia1 + "/" + mes1 + "/" + año1)
        
}else{
    alert("Fecha anterior: " + dia + "/" + mes + "/" + año)
}