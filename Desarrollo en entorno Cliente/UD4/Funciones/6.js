
//Funcion para hacer la suma con el metodo reduce
sumaRed = (total, num) => total + num;

//Funcion que utiliza a la funcion sumaRed para sumar los parametros de entrada mediante el metodo reduce. 
//Los parámetros de entrada son convertidos a array mediante REST 
sumParam = (...num) => num.reduce(sumP);    


console.log(sumParam(1, 2, 3, 4))

