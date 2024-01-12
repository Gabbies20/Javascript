usuario ="n"
usuarios = []

//Mientras la respuesta no esté vacía se seguirán introduciendo usuarios
while(usuario != ""){

    //Se pregunta por los datos de un usuario y luego se pasas dichos datos a un array mediante el metodo split
    usuario = prompt("Introduzca los datos del usuario(nombre,apellido,dni,email,fecha de nacimiento)");
    usuarioArray = usuario.split(","); //Separamos los campos por las comas

    // Se añadirán los datos del usuario a un array siempre y cuando no sea un espacio en blanco
    if(usuarioArray[0] != ""){
        usuarios.push(usuarioArray);
    }
   

}


console.log(usuarios);


