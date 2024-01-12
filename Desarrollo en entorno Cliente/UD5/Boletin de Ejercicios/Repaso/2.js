window.addEventListener("load",inicio)

function inicio(){

    formulario = document.getElementById("contacto")

    boton = document.getElementById("boton")    
    boton.addEventListener("click",mostrarElementos)


    function mostrarElementos(){

        var elementos ="";

            

        for(var i = 0; i< formulario.elements.length-1; i++){
            elementos+=formulario.elements[i].name + ": " + formulario.elements[i].value.toUpperCase() + "\n"
        }


        console.log(elementos)

        // Ejer3
        var dia = document.getElementById("dia").value
        var mes = document.getElementById("mes")
        var valorMes = mes.options[mes.selectedIndex].value
        var año = document.getElementById("año").value
    
        var fecha = new Date(año,valorMes,dia)
        var hoy = new Date()
        var edad = hoy.getFullYear()-fecha.getFullYear()
    
        var mes = hoy.getMonth() - fecha.getMonth()
    
        if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
            edad--;
        }

        edadInput = document.getElementById("edad")
        
        edadInput.innerHTML = edad
        

    }

}