genero = "";
mediaH = parseInt(0);
mediaM = parseInt(0);
contH = parseInt(0);
contM = parseInt(0);

while(genero != "*"){
    genero = prompt("Género de la persona (H/M, * para salir).")
    if(genero == "H"){
        salario = parseInt(prompt("Introduzca el salario"))
        mediaH += salario;
        contH++;
    }else if(genero == "M"){
        salario = parseInt(prompt("Introduzca el salario"))
        mediaM += salario;
        contM++;
    }else if(genero != "*" && genero != "H" && genero != "M"){
        alert("Dato no válido. Valores esperados(H,M,*)")
    }
}
alert("Media hombres: " + mediaH / contH + "\n"
        + "Media mujeres" + mediaM / contM);