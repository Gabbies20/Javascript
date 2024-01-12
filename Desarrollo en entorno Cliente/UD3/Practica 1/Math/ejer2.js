v = 0;
a = 0;
g = parseFloat(9.8)


while (v <= 0){
    v = prompt("Intrduzca la velocidad inicial (valores positivos)")
    v = parseInt(v)

    if (v <= 0 )
        console.log("¡¡ERROR!! Los valores deben ser positivos")

}

while (a <= 0 || a > 90 ){
    a = prompt("El ángulo (0-90)")
    a = parseInt(a)
    if (a <= 0 )
        console.log("¡¡ERROR!! El ángulo debe estar comprendido entre 0 y 90")
}

result = (2 * Math.pow(v,2)*Math.sin(a)*Math.cos(a)) / g

console.log(result)
