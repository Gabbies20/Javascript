/**
 * arguments: es un objeto similar a Array accesible dentro de las funciones que contiene los valores de los argumentos pasados a esa función.
 */

function ejemplo() {
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments);
    }
  }
  
  ejemplo(1, 2, 3); // Muestra 1, 2, 3
  
  var sum = function() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};
 
document.writeln(sum(4, 8, 15, 16, 23, 42));


function argumentos(a1,a2,a3,a4,a5){

  for( let i= 0; i< arguments.length; i+=1){
    console.log(arguments[i])
  }

}

argumentos(1,4,5,6,8)


// 1. Acceder a los argumentos por indice:
function ejemplo() {
  console.log(arguments[0]); // Accede al primer argumento
  console.log(arguments[1]); // Accede al segundo argumento
  console.log(arguments[2]); // Accede al tercer argumento
}

ejemplo(1, "dos", true);


//2. Iterar a través de los argumentos:
function ejemplo() {
  for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
  }
}

ejemplo(1, "dos", true);

// 3. Convertir argumnents  en un array real:
function ejemplo() {
  const argsArray = Array.from(arguments);
  console.log(argsArray);
}

ejemplo(1, "dos", true);


// 4. Usando la sintaxis del operador de propagación('...') para convertir 'arguments' a un array:
function ejemplo() {
  const argsArray = [...arguments];
  console.log(argsArray);
}

ejemplo(1, "dos", true);


// 5. Recorrerlos isn usar arguments:
// Creamos una variable que contenga los argumentos y luego los recorremos.
function argumentos(a1, a2, a3, a4, a5) {
  const args = [a1, a2, a3, a4, a5];

  for (let i = 0; i < args.length; i += 1) {
    console.log(args[i]);
  }
}

argumentos(1, 4, 5, 6, 8);


//PARAMETRO REST:
function argumentos(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

argumentos(1, 4, 5, 6, 8);
