
for(i = 2023; i < 2074; i++){
    cumpleaños = new Date(i,08,23)

    dia = cumpleaños.getDay();
    año = cumpleaños.getFullYear()

    console.log("Año: " + año + " dia: " + (dia + 1))
}