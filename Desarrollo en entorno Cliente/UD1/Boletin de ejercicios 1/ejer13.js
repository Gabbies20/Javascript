fechaCorrecta = false;

while(!fechaCorrecta){
    dia = parseInt(prompt("Introduzca el dia"));
    if(dia < 0 || dia >30){
        alert("Fecha incorrecta, vuelva a intentarlo")
    }else{
        fechaCorrecta = true;
    }
    
}

fechaCorrecta = false;

while(!fechaCorrecta){
    mes = parseInt(prompt("Introduzca el mes"));
    if(mes < 0 || mes >12){
        alert("Fecha incorrecta, vuelva a intentarlo")
    }else{
        fechaCorrecta = true;
    }
}


año = parseInt(prompt("Introduzca el año"));

tarot = dia + mes + año;
cadenaTarot = tarot.toString();
numTar = parseInt(0);

for(var i = 0; i <cadenaTarot.length; i++){
    numTar += parseInt(cadenaTarot.charAt(i));
}

alert(cadenaTarot);
alert(numTar);
