//Funciones recursivas:
//Imprimir 3,2,1
function funcionRecursiva(numero){
    //Caso base:
    if(numero == 1){
        console.log(numero);
    }else{
        console.log(numero);
        funcionREcursiva(numero -1)
    }
}

//Llamamos a nuestra función:
funcionRecursiva(3);