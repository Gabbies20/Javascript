
/*
    Crear   un   formulario   que   utiliza   un   campo   de   entrada   de   texto, que   pida   al   usuario   que escriba   su   nombre   en   letras   mayúsculas.  
    El   botón   de   envío   será   una   imagen.   Validar que   el   formulario   no   está   vacío   y   que   el   usuario   ha   escrito   su   nombre   sólo   con   letras mayúsculas. 
    Envíe el formulario a un programa de servidor si es correcto.
*/


window.addEventListener("load",inicio)

function inicio(){

    nombre = document.getElementById("nombre")
    confirmacion = document.getElementById("confirmacion")
    boton = document.getElementById("boton")
    //boton.addEventListener("click", confirmarEnvio)

    nombre.addEventListener("keydown", validarEnvío)

    function confirmarEnvio(){

         // Contenido del textarea
         valorNombre = nombre.value

         // Validacion del textarea
         expNombre = new RegExp('^([A-Z]*)$')
         console.log(valorNombre)
 
        

        if(!expNombre.test(valorNombre)){
            confirmacion.innerHTML = "Solo se permiten mayusculas"
        }else if( valorNombre==""){
            confirmacion.innerHTML = "Por favor rellene el formulario"
        }else{
            confirmacion.innerHTML = "Todo correcto"
        }
    }


    function validarEnvío(){

        // Contenido del textarea
        valorNombre = nombre.value

        // Validacion del textarea
        expNombre = new RegExp('^([A-Z]*)$')
        console.log(valorNombre)

       

       if(!expNombre.test(valorNombre)){
           confirmacion.innerHTML = "Solo se permiten mayusculas"
       }else if( valorNombre==""){
           confirmacion.innerHTML = "Por favor rellene el formulario"
       }else{
           confirmacion.innerHTML = "Todo correcto"
       }
   }

}