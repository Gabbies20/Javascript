salir = 'n';

while(salir != 's'){
    salir = prompt("Introduce una nota (s para salir)");
    nota = parseFloat(salir);

    if(nota < 0 || nota > 10){
        alert("Nota no válida, vuelva a intentarlo: Rango de notas (0-10)")
    }else{
        if(nota>=9){
            alert("Sobresaliente")
        }else if(nota >= 7 && nota <= 8){
            alert("Notable")
        }else if(nota >= 6 && nota < 7){
            alert("Bien")
        }else if(nota >= 5 && nota < 6){
            alert("Notable")
        }else{
            alert("Suspenso")
        }
    }

}