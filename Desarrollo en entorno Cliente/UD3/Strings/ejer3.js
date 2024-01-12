cadena = "Buenos dias tenga usted"

ParIzquierdo = cadena.indexOf("(")
ParDerecho = cadena.indexOf(")")



if(ParIzquierdo == -1 ){
    frase = ""
}else if(ParDerecho == -1){
    frase = cadena.substring(ParIzquierdo + 1,cadena.length)
}else{
    frase = cadena.substring(ParIzquierdo + 1,ParDerecho)
}

console.log(ParIzquierdo)
console.log(ParDerecho)
console.log(frase)
