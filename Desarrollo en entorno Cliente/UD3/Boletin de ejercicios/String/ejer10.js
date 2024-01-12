cadena = "Buenos dias tenga usted";
parentesisD = cadena.indexOf("(");
parentesisI = cadena.indexOf(")");

if(parentesisI == -1){
    parentesisI = cadena.length;
    palabra = cadena.substring(parentesisD + 1, parentesisI);
    alert(palabra)
}else if(parentesisD == -1){
    palabra = " ";
    alert(palabra)
}else{
    palabra = cadena.substring(parentesisD + 1, parentesisI);
    alert(palabra)
}



