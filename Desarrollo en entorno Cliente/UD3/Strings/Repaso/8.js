cadena = " hola  buenos dias tenga    usted".split(' ')


console.log(cadena)

cadena = cadena.filter(palabra => palabra != '').reduce((total,valor) => total + " " + valor)

console.log(cadena)

