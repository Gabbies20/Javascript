fecha1 = new Date("1994-09-24");
fecha2 = new Date("2000-04-12");

if (fecha1 < fecha2){
    console.log(fecha1.getDate() + "/" + (fecha1.getMonth() + 1) + "/" + fecha1.getFullYear() +  " Es anterior")
}else{
    console.log(fecha2.getDate() + "/" + (fecha2.getMonth() + 1) + "/" + fecha2.getFullYear() +  " Es anterior")
}