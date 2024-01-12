

h = prompt("Escriba la hora en formato hh:mm")

if((h > "2359" || h < "0000") || (h > "{0-9}{0-9}59")){
    alert("Fecha incorrecta")
}
else if(h >= "0730" && h <= "1400"){
    alert("Buenos dias");
}
else if(h >= "1401" && h <= "2030"){
    alert("Buenas tardes");
}
else if(h >= "0000" && h <= "0729"){
    alert("Buenas noches");
}else{
    alert("Buenas noches");
}