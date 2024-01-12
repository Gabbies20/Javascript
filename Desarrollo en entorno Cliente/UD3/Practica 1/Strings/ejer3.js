cadena = " Hola como estas) tu"
parIzq = cadena.indexOf("(")
parDer = cadena.indexOf(")")

if(parIzq != -1 && parDer != -1 ){
    console.log(cadena.substring(parIzq+1, parDer));
}else if(parIzq == -1 && parDer != -1){
    console.log("");
}else if(parIzq != -1 && parDer == -1){
    console.log(cadena.substring(parIzq+1, cadena.lenght));
}
