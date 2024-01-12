

var usuarios = ""
var salir = ""
var ventana


expAlias = new RegExp('^@?[a-z]{7}[0-9]{3}$')


while(salir != "s"){

    var alias = prompt("Introduzca un alias").toLowerCase()
    validarAlias = expAlias.test(alias)

    if(validarAlias){
        if(!alias.includes("@")){
            alias="@"+alias
        }

        alias = alias.substring(0,2) + "_" + alias.substring(2,8) + "_" + alias.substring(8)
        usuarios+=alias +"\n"
        
        salir = prompt("¿Desea salir(s/n)?")
    }else{
        alert("Formato incorrecto")
    }
}

setTimeout(abrirVentana,3000)


function abrirVentana(){
    var y=parseInt((window.screen.height/2)-(400/2));
    var x=parseInt((window.screen.width/2)-(400/2));

    ventana = window.open("",target='blank','width= 400'+',height=400'+',top='+y+',left='+x+',toolbar=no,location=no,status=no,menubar=no,scrollbars=no,directories=no,resizable=no');
    ventana.document.write(usuarios);

}


