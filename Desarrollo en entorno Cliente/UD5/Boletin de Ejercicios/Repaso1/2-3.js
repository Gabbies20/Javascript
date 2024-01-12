window.addEventListener("load",inicio)

function inicio(){

    
    var ventana
    elementos = ""
    formulario = document.getElementById("contacto")
    boton = document.getElementById("boton")
    boton.addEventListener("click", elementosMayusculas)

    function elementosMayusculas(){
        for (i = 0; i < formulario.elements.length-1; i++){
            elementos+=formulario.elements[i].name + ":" + formulario.elements[i].value.toUpperCase() + "\n"
        }
        
        document.getElementById("contenido").innerHTML = elementos

        //ventana = window.open("")
        //ventana.document.write(elementos)

        dia = document.getElementById("dia").value
        mes = document.getElementById("mes")
        var valorMes = mes.options[mes.selectedIndex].value
        año = document.getElementById("año").value

        var fecha = new Date(año,valorMes,dia)
        var hoy = new Date()
        var edad = hoy.getFullYear()-fecha.getFullYear()
    
        var mes = hoy.getMonth() - fecha.getMonth()
    
        if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
            edad--;
        }

        console.log(dia)
        console.log(mes)
        console.log(año)
        document.getElementById("edad").innerHTML = edad
        
    }


}