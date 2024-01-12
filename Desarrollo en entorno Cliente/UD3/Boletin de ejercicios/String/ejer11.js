cadena = "hola que tal";
cadenaInv = "";
for(i = parseInt(0); i < cadena.length; i++){
    cadenaInv+= cadena.charAt(cadena.length - i);
}
cadenaInv+= cadena.charAt(cadena.length - i);
alert(cadenaInv);