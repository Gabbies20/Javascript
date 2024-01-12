matricula = prompt("Introduzca la matrícula")
letras = ""
numeros = ""

expMat = new RegExp('[a-z]{3}-?[0-9]{4}' ,'i')

m = expMat.exec(matricula)

if (m){

    if(matricula.indexOf('-') == -1){

        matricula = matricula.substring(0, 3).toUpperCase() + "-" + matricula.substring(3); 

    }else{

        matricula = matricula.toUpperCase()
        
    }

    alert(matricula)

}else{

    alert("Formato de matricula incorrecto")

}



