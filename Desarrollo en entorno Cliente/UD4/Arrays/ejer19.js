//EJER 19

/*
usuario ="n"
usuarios = []
while(usuario != ""){
    usuario = prompt("Introduzca los datos del usuario(nombre,apellido,dni,email,fecha de nacimiento)");
    usuarioArray = usuario.split(",");

    if(usuarioArray[0] != ""){
        usuarios.push(usuarioArray);
    }
   

}
*/

usuarios = [
    ["Pepe", "Antonio", "w5","pepe@gmail.com","1994-06-25"],
    ["Manolo", "Antonio", "w6","manolo@gmail.com","2010-06-25"],
    ["Marta", "Alfonso", "w7","marta@gmail.com","2005-06-25"]
]
console.log(usuarios);




//EJER 20
/*menu = ""
while(menu != "4"){

    menu = prompt("1) Buscar apellidos\n"
                + "2) Buscar por dni\n"
                + "3) Buscar por edad\n"
                + "4) Salir")

    switch (menu) {
        case "1":
            alert(opcionApellido(usuarios))
            break;

        case "2":
            alert(opcionDni(usuarios))
            break;

        case "3":
            alert(opcionEdad(usuarios))
            break;
    
        default:
            break;
    }
}


//Busqueda por apellido
function opcionApellido(usuarios){
    apellido = prompt("Introduzca el apellido del usuario");
    buscaApellido = (usuarioApellido) => usuarioApellido[1] ==  apellido;
    d = usuarios.filter(buscaApellido)
    return d;
}


//Busqueda por DNI
function opcionDni(usuarios){
    dni = prompt("Introduzca el dni del usuario");
    buscaDNI = (usuarioDni) => usuarioDni[2] ==  dni;
    d = usuarios.filter(buscaDNI)
    return d;
}

//Busqueda por Edad
function opcionEdad(usuarios){
    //Guarda la edad del usuario
    preguntaEdad = parseInt(prompt("Introduzca la edad del usuario"))
    //Array que guardará los usuarios que coincidan con la edad
    edadUsario = []

    for (i = 0; i < usuarios.length; i++){
        //Convertimos la fecha de nacimiento a tipo fecha
        edadBac = new Date(usuarios[i][4])
        hoy = new Date()
        //Obtenemos la edad de la persona
        edad =  hoy.getFullYear() - edadBac.getFullYear() 
        
        //Agregará al array todas las edades que coincidan
        if(preguntaEdad == edad){
            edadUsario.push(usuarios[i])
        }
    }

    return edadUsario;
}



*/

//Ejer21




/*
menu = ""

while(menu == ""){

    menu = prompt("1) Mayor de edad\n"
                + "2) Menor de edad\n"
                + "3) Modifica Datos\n"
                + "4) Elimina usuario\n"
                + "5) Salir")

    switch (menu) {
        case "1":
            abrirVentana(usuarios.filter(mayoresEdad))
            break;
        case "2":
            abrirVentana(añosMayoria(usuarios))
            break;
        default:
            break;
    }
}



//a. Filtra los usuarios mayores de edad
function mayoresEdad(usuarioEdad){
    usuarioEdad = new Date(usuarioEdad[4])
    hoy = new Date()
    //Obtenemos la edad de la persona
    edad =  hoy.getFullYear() - usuarioEdad.getFullYear() 

    return edad > 18

}

//b. Filtra los usuarios menores de edad
function menoresEdad(usuarioEdad){
    usuarioEdad = new Date(usuarioEdad[4])
    hoy = new Date()
    //Obtenemos la edad de la persona
    edad =  hoy.getFullYear() - usuarioEdad.getFullYear() 

    return edad < 18
}



//b. Calcula los años y dias que le faltan a un usuario para la mayoria de edad
function añosMayoria(usuarios){
    //Mete en un array los usuairos menores de edad
    usuariosMenores = usuarios.filter(menoresEdad)
   
    hoy = new Date()

    //Variables para pasar de milisegundos a dias
    miliPorMinuto = 1000 * 60
    miliPorHora = miliPorMinuto * 60
    miliPorDia = miliPorHora * 24 
    
    //Array donde almacenaremos los años y dias que les faltan a cada usuario para la mayoria de edad
    mayoria = []
    
    //Recorremos el array de con losusuarios menores
    for(i = 0; i < usuariosMenores.length; i++){

        //Fecha de nacimiento del usuario en milisegundos
        usuarioEdad = new Date(usuariosMenores[i][4])
        //Calculamos la edad del usuario en milisegundos
        edad =  hoy - usuarioEdad

        //Pasamosla edad de milisegundos a dias
        edadDias = Math.floor(edad /miliPorDia )

        //Obtenenos los dias faltantes para la mayoria de edad del usuario
        diasParaMayoria= Math.floor((18*360) - edadDias )

        //Obtenemos los años para la mayoria de edad del usuario
        añosParaMayoria = Math.floor(diasParaMayoria / 360)

        //Obtenemos los dias restantes dentro del ultimo año para la mayoria de edad del usuario
        diasRestantes = Math.floor(diasParaMayoria % 360)

      //Añadimos la informacion al array "mayoria"
       mayoria.push(" A "+ usuariosMenores[i][0] + " " + usuariosMenores[i][1] + " le quedan " + añosParaMayoria + " años y " 
       +  diasRestantes + " dias para ser mayor de edad")
        
    }
    return mayoria
}

//(a,b). Abre una ventana con la información que se le pasa como parámetro
function abrirVentana(edad) {
    var ventana
    
    ventana = window.open("", "MsgWindow", "height=200,width=300, location=yes,resizable=yes,scrollbars=yes,top=0,left=0,");

    ventana.document.write(edad);
}
*/



console.log(modificarUsuario())



function opcionDni(usuarios){
    dni = prompt("Introduzca el dni del usuario");
    buscaDNI = (usuarioDni) => usuarioDni[2] ==  dni;
    d = usuarios.filter(buscaDNI)
    return d;
}

function modificarUsuario(){
    datoAntiguo = parseInt(prompt("¿Que dato deseas modificar:? \n"
                            + "1. Nombre \n"
                            + "2. Apellido \n"
                            + "3. DNI \n"
                            + "4. Email \n"
                            + "5. Fecha \n"))

    datoNuevo = prompt("Introduzca el nuevo valor: ")

    usuario = opcionDni(usuarios)
    u = usuario[0]

    u.splice(datoAntiguo-1,1,datoNuevo)

    for (i = 0; i < usuarios.length; i++){
        if(u[2] == usuarios[i][2]){
            usuarios.splice(i,1,u[2])
        }
    }
    return usuarios
}


