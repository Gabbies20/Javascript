
dias = [
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
    'domingo',
  ];

for (i = 2023; i < 2074; i++){

    cumpleaños = new Date(i,08,23);

    dia = cumpleaños.getDay();
    año = cumpleaños.getFullYear();
    
    nombreDia = dias[dia]


    console.log("Año " + año + ": " + nombreDia)

}

