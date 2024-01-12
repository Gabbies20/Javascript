dinero = parseFloat(2001.88);
moneda2 = parseInt(2);
moneda1 = parseInt(1);
moneda50 = parseFloat(0.50);
moneda20 = parseFloat(0.20);
moneda10 = parseFloat(0.10);
moneda5 = parseFloat(0.05);
moneda02 = parseFloat(0.02);
moneda01 = parseFloat(0.01);
cantMonedas = parseInt(0)

while(dinero > 0){

    if(dinero >= moneda2){
        cantMonedas+= parseInt(dinero / moneda2)
        dinero = dinero % moneda2;
        dinero = parseFloat(dinero.toFixed(2));
    }else if(dinero >= moneda1){
        cantMonedas+= parseInt(dinero / moneda1)
        dinero = dinero % moneda1;
        dinero = parseFloat(dinero.toFixed(2));
    }else if(dinero >= moneda50){
        cantMonedas+= parseInt(dinero / moneda50)
        dinero = dinero % moneda50;
        dinero = parseFloat(dinero.toFixed(2));
    }else if(dinero >= moneda20){
        cantMonedas+= parseInt(dinero / moneda20)
        dinero = dinero % moneda20;
        dinero = parseFloat(dinero.toFixed(2));
    }else if(dinero >= moneda10){
        cantMonedas+= parseInt(dinero / moneda10)
        dinero = dinero % moneda10;
        dinero = parseFloat(dinero.toFixed(2));
    }else if(dinero >= moneda5){
        cantMonedas+= parseInt(dinero / moneda5)
        dinero = dinero % moneda5;
        dinero = parseFloat(dinero.toFixed(2));
    }else if(dinero >= moneda02){
        cantMonedas+= parseInt(dinero / moneda02)
        dinero = dinero % moneda02;
        dinero = parseFloat(dinero.toFixed(2));
    }else if(dinero >= moneda01){
        cantMonedas+= parseInt(dinero / moneda01)
        dinero = dinero % moneda01;
        dinero = parseFloat(dinero.toFixed(2));
    }
}
alert(cantMonedas +"\n"
        + dinero);
