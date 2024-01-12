x = prompt("Introduzca el eje de las x");
y = prompt("Introduzca el eje de las y");

if(x > 0 && y > 0 ){
    alert("Primer cuadrante");
}else if(x < 0 && y > 0 ){
    alert("Segundo cuadrante");
}else if(x < 0 && y < 0 ){
    alert("Tercer cuadrante");
}else if(x > 0 && y < 0 ){
    alert("Cuarto cuadrante");
}else if(x == 0 && y == 0 ){
    alert("Origen(0:0)");
}else if(x==0 && (y > 0 || y < 0)){
    alert("Se encuentra sobre el eje de las y")
}else if(y==0 && (x > 0 || x < 0)){
    alert("Se encuentra sobre el eje de las x")
}
    
