cadena = "Hola  como estas      tu"
palabra = "";
sinRepetidos = ""
indiceI = 0;


for(i = 0; i < cadena.length; i++){
    palabra+=cadena.charAt(i);
    if(cadena.charAt(i) == " "){
        palabra = palabra.replace(/\s+/, '')
        if(palabra != ""){
        sinRepetidos+=palabra+" "
        }
        palabra = "";
    }


}
sinRepetidos+=palabra
alert(sinRepetidos)