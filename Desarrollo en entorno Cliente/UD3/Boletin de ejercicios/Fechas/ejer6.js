
dias = [
   'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado', 
  ];

for (i = 2023; i < 2074; i++){

    cumpleaños = new Date(i,08,24);

    dia = cumpleaños.getDay();
    año = cumpleaños.getFullYear();
    
    nombreDia = dias[dia]


    console.log("Año " + año + ": " + nombreDia)

}

