hora  = "23:00"


expHora = new RegExp('([0-1][0-9]|[2][0-3]):[0-5][0-9]');
validarHora = expHora.test(hora)

if(validarHora && hora.length == 5){
    alert("Hora valida: " + hora)
}else{
    alert("Formato e hora no válido. Debe seguir el siguiente formato: (HH:MM) y estar entre los rangos 00:00 - 23:59 ")
}