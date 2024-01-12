//Calcular de un conjunto de fechas la menor, la mayor y la diferencia en segundos entre ambas.
mayor = 0;
menor = 0;

for (i = 0; i < 3; i++){
    fecha = new Date(prompt("Introduzca una fecha en formato(aaaa-mm-dd)"))
    fechaM = fecha.getTime();

    if (fechaM > mayor) {
        mayor = fechaM;
    }
    if (fechaM < menor || menor == 0){
        menor = fechaM;
    }

}

mayorF = new Date(mayor)
menorF = new Date(menor)

console.log(mayorF)
console.log(menorF)

console.log("Fecha mayor: " + `${mayorF.getFullYear()}/${mayorF.getMonth()+1}/${mayorF.getDate()}`, "Fecha menor: " + `${menorF.getFullYear()}/${menorF.getMonth()+1}/${menorF.getDate()}`);

