alias = "";
var ventana;



totalAlias = ""
    while(alias != "fin"){ 

        alias = prompt("Introduzca un alias.('fin' para salir)")
        alias = alias.toLowerCase();
        
        expAlias = new RegExp("^@?([a-z]){7}([0-9]){3}$")

        if(expAlias.exec(alias)){

            if(alias.charAt(0) != '@'){
                alias = '@' + alias
            }
            alias = alias.substr(0,2) + "_" + alias.substr(2,6) + "_" + alias.substr(8,alias.length)
            totalAlias += alias + "\n"
            console.log(totalAlias)

        }else if(!expAlias.exec(alias) && alias !="fin"){

            console.log("error")
        }
}


setTimeout(abrirVentana,3000)

function abrirVentana(){

     //Calcular el centro de la pantalla
     var y=parseInt((window.screen.height/2)-(400/2));
     var x=parseInt((window.screen.width/2)-(400/2));
    ventana = window.open("",target='blank','width= 400'+',height=400'+',top='+y+',left='+x+',toolbar=no,location=no,status=no,menubar=no,scrollbars=no,directories=no,resizable=no'); 
    
    ventana.document.write(totalAlias)
}
