cadena = "roberto@gmail.com"
indiceArroba = cadena.indexOf("@")

expCorr = new RegExp('^[a-z]*@gmail.com')
validaCorreo = expCorr.test(cadena)



console.log(validaCorreo)

console.log(cadena.substring(0,indiceArroba))

console.log(cadena.substring(indiceArroba))