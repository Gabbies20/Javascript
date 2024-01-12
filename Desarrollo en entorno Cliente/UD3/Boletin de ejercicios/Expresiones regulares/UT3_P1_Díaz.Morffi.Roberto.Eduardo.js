alias = ""
conjunto_alias = ""
ventana = ""
exNo = new RegExp('@[a-z]{7}[1-9]{3}$','i')

//Mientras que el usuario no escriba fin preguntará y comprobará los alias
while(alias != "fin"){
    alias=prompt("Introduzca su alias")

    //Si el alias no tiene un "@" se lo agrega
    if(alias.charAt(0) != '@' && alias != "fin"){
        alias = "@"+alias
    }

    //Si el alias es válido se ejecutará el siguiente código
    if(exNo.test(alias)){
        
        // Formatea el alias
        alias = alias.substring(0,2) + "_" + alias.substring(2,8) + "_" + alias.substring(8,alias.length) 

        //Agrega los alias ingresados
        conjunto_alias+=alias+"\n";   
              
    //Si el alias no se valida correctamente mostrará un mensaje de error
    }else if(!exNo.test(alias) && alias != "fin"){
        alert("Datos erroneos")
    }
}

//Comprueba si se ha introducido algun alias
if(conjunto_alias == ""){
    window.alert("No ha introducido ningún alias")
}else{
    setTimeout(function(){

        //Calcular el centro de la pantalla
        var y=parseInt((window.screen.height/2)-(400/2));
        var x=parseInt((window.screen.width/2)-(400/2));
    
        ventana = window.open("",target='blank','width= 400'+',height=400'+',top='+y+',left='+x+',toolbar=no,location=no,status=no,menubar=no,scrollbars=no,directories=no,resizable=no');
        ventana.document.write(conjunto_alias);
    }, 3000);  
    
}




