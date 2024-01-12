cadena = "RADAR".toLocaleLowerCase()
cadenaInver= "";
arrCadena = [...cadena].reverse()

for(let i of arrCadena){
    cadenaInver+=i
}

if(cadena == cadenaInver){
    console.log(cadena + " es palindromo")
}else{
    console.log(cadena + " no es palindromo")
}

