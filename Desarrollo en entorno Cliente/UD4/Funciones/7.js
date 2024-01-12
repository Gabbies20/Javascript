var numArr = [5,6,10,23,6,3,23]


menorMayor = (numeros) => "Mayor: " + Math.max(...numeros) + ", Menor: " + Math.min(...numeros); 

console.log(menorMayor(numArr))