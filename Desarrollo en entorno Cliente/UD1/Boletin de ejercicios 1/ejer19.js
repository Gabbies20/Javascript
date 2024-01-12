bolita = parseInt(Math.random() * 3);
correcto = false;
while(!correcto){
    respuesta = parseInt(prompt("¿Donde está la bolita? (0-2)"))
    if(respuesta < 0 || respuesta > 2){
        alert("Los valores deben ser de 0 a 2")
    }else{
        if(respuesta == bolita){
            alert("¡CORRECTO!")
            correcto = true;
        }else{
            alert("Fallaste. Vuelve a intentarlo")
        }
    }
}
