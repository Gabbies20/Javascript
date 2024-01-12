salir = "n";
num1 = 0;
num2 = 0;
redondeo = 0;
while(salir != "s"){


    switch(menu()){
        case 1: 
            alert(redCeil())
            break;
        case 2: 
            alert(redFloor())
            break;
        case 3: 
            alert(redRound())
            break;
        case 4: 
            alert(maxNum())
            break;
        case 5: 
            alert(minNum())
            break;
        case 6: 
            alert(powNum())
            break;
        case 7: 
            alert(sqrtNum())
            break;
    }
    

    salir = prompt("¿Desea salir (s/n)?")
}


//FUNCIONES

function redCeil() {
    num1 = parseFloat(prompt("Introduzca el numero"))
    result = Math.ceil(num1,2)
    return result;
}

function redFloor() {
    num1 = parseFloat(prompt("Introduzca el numero"))
    result = Math.floor(num1,2)
    return result;
}

function redRound() {
    num1 = parseFloat(prompt("Introduzca el numero"))
    result = Math.floor(num1,2)
    return result;
}

function maxNum() {
    num1 = parseFloat(prompt("Introduzca el numero 1"))
    num2 = parseFloat(prompt("Introduzca el numero 2"))
    result = Math.max(num1,num2)
    return result;
}


function minNum() {
    num1 = parseFloat(prompt("Introduzca el numero 1"))
    num2 = parseFloat(prompt("Introduzca el numero 2"))
    result = Math.min(num1,num2)
    return result;
}

function powNum() {
    num1 = parseFloat(prompt("Introduzca la base"))
    num2 = parseFloat(prompt("Introduzca el exponente"))
    result = Math.pow(num1,num2)
    return result;
}

function sqrtNum() {
    num1 = parseFloat(prompt("Introduzca el numero"))
    result = Math.sqrt(num1)
    return result;
}


function menu(){
    opcion = parseInt(prompt("1. Redondeo inmediato superior\n"
                 + "2. Redondeo inmediato inferior\n"
                 +"3. Redondeo más cercano\n"
                 +"4. Numero máximo entro dos\n"
                 +"5. Numero mínimo entro dos\n"
                 +"6. Elevar un numero a otro\n"
                 +"7. Raiz cuadrada de un numero\n"
                 ));

    return opcion
}