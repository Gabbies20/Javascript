//Hacer el Tarot que comprueba que la fecha de nacimiento, introducida no es mayor que la actual.

fecha_nac = new Date("1994-09-24")
fecha_nacM = fecha_nac.getTime()

fecha = new Date()
fechaM = fecha.getTime()

if(fecha_nacM > fechaM){
    alert("La fecha introducida es mayor que la actual")
}else{
    alert("La fecha introducida no es mayor que la actual")
}


