/**
 * Trabajas para una agencia de publicidad y te han pedido el siguiente desarrollo:

Al cargar la página se solicita un nombre de usuario, este debe contener exactamente 7 dígitos o caracteres, ni más, ni menos, en caso contrario debe volver a solicitar el nombre de usuario. 

Una vez introducido el nombre de usuario, el programa averiguará el número de dígitos que contiene el mismo y mostrará un pop-up en la esquina inferior derecha cada 5 segundos tantas veces como dígitos tenga el nombre de usuario. El pop-up mostrará el siguiente mensaje:

"Hola usuario. Aquí tienes el producto del año. Atrévete a probarlo!!"

 */

var n_usuario = prompt('Ingrese el nombre de usuario: ');
var regex = /[\w]{7}/;

var usuario_aceptado = regex.test(n_usuario);

while(!usuario_aceptado){
    n_usuario = prompt('Ingrese el nombre de usuario: ');
}

console.log(n_usuario);
console.log(usuario_aceptado);



var regex = /^.{7}$/;
var nombres = [];

//Funcion que solita el nombre al usuario.
function solicitarNombreUsuario() {
    let n_usuario;
    do {
        n_usuario = prompt('Ingrese su nombre de usuario: ');
    } while (!regex.test(n_usuario));

    nombres.push(n_usuario);
    return n_usuario;
}

//Lo guardo en una variable.
var n_usuario = solicitarNombreUsuario();
console.log(nombres);


//Funcion que me calcula la cantidad de digitos que contiene el nombre de usuario.
function numeroDigitos(nombre) {
    let regex = /\d/g;
    var caracteres = nombre.match(regex);


    return caracteres;
}
var cantidadDigitos = numeroDigitos(n_usuario);
cantidadDigitos = (cantidadDigitos.length);


console.log(numeroDigitos(n_usuario));

let ventana;
let id;


id = setInterval(() => {

    ventana = window.open('', '', 'width=50, height=50, right= 0, bottom=0');
    ventana.document.write(`"Hola ${n_usuario} <br>
                                Aquí tienes el producto del año. <br>
                                Atrévete a probarlo."`);

    cantidadDigitos--;

    //Para detener ejecución:
    if (cantidadDigitos <= 0) {
        clearInterval(id);
    }



}, 3000);













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
>>>>>>> b30a6fb7995d5e58b453c234276217fe0e0609fc
