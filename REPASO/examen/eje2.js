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