correo = "roberto@gmail.com";

//Expresion regular que comprueba si la cadena contiene 'at'
expAt = new RegExp(' ?at ?([a-z])+.com', 'i')

//Expresion regular que comprueba que el nombre tenga al menos 3 caracteres
expNombre = new RegExp('([a-z|0-9]){3,}', 'i');

//Expresion regular que comprueba que el correo tenga el símbolo @
expArroba = new RegExp('@{1}([a-z])+.com' ,'i')


//Si el test a la expresión es verdadero cambiará 'at' por '@' y eliminará los espaciosen blanco si los tuviera
if(expAt.test(correo)){
    correo = correo.replace('at', '@')
    correo = correo.replace(/\s+/g, '')
}

//Variable que almacenara la parte del nombre del correo

if(expArroba.test(correo)){
    nombre = correo.substring(0, correo.indexOf('@'))
}else{
    nombre = correo.substring(0, correo.indexOf('.'))//Si el correo no tiene '@' tomará como referencia el punto
}


if(!expArroba.test(correo)){ //Se comprueba que el correo tenga '@', de lo contrario saltará un mensaje de error
    alert("Falta el símbolo @ en el correo electrónico.");
    if(!expNombre.test(nombre)){//Ademas de comprobar la '@', comprueba además que cumpla con el requisite de las 3 letras
        alert("El nombre no cumple tener al menos tres letras.");
    }
}else if(!expNombre.test(nombre)){ //Se comprueba que el nombre tenga al menos 3 caracteres, de lo contrario saltará un mensaje de error
    alert("El nombre no cumple tener al menos tres letras.");
}else{ //Si todos los test son verdaderos, mostrará el mensaje de 'Correo aceptado'
    alert("Correo aceptado: " + correo)
}
