/**
 * Trabajas para una agencia de publicidad y te han pedido el siguiente desarrollo:

Al cargar la página se solicita un nombre de usuario, este debe contener exactamente 7 dígitos o caracteres, ni más, ni menos, en caso contrario debe volver a solicitar el nombre de usuario. 

Una vez introducido el nombre de usuario, el programa averiguará el número de dígitos que contiene el mismo y mostrará un pop-up en la esquina inferior derecha cada 5 segundos tantas veces como dígitos tenga el nombre de usuario. El pop-up mostrará el siguiente mensaje:

"Hola usuario. Aquí tienes el producto del año. Atrévete a probarlo!!"

 */
var regex = /^.{7}$/;
var nombres = [];

//Funcion que solita el nombre al usuario.
function solicitarNombreUsuario(){
    let n_usuario ;
    do{
        n_usuario = prompt('Ingrese su nombre de usuario: ');
    }while(!regex.test(n_usuario));

    nombres.push(n_usuario);
    return n_usuario;
}

//Lo guardo en una variable.
var n_usuario = solicitarNombreUsuario();
console.log(nombres);


//Funcion que me calcula la cantidad de digitos que contiene el nombre de usuario.
function numeroDigitos(nombre){
    let regex = /\d/g;
    var caracteres = nombre.match(regex);
    

    return caracteres;
}

console.log(numeroDigitos(n_usuario));















/**
 * PARA EVITAR ESTO --> LO GUARDO TODO EN UNA VARIABLE:
 * solicitarNombreUsuario();
console.log(nombres);

function numeroDigitos(nombre){
    let regex = /\d/g;
    var caracteres = nombre.match(regex);
    

    return caracteres;
}

console.log(numeroDigitos(solicitarNombreUsuario()));
 */