window.addEventListener("load",inicio)

function inicio(){
    elementos = ""
    boton = document.getElementById("boton")
    formulario = document.getElementById("contacto")

    boton.addEventListener("click", mostrarMayusculas)

    function mostrarMayusculas(){
        for (i = 0; i < formulario.elements.length -1; i++){
            formulario.elements[i].value=formulario.elements[i].value.toUpperCase()
        }

        dia = document.getElementById("dia").value
        mes = document.getElementById("mes")
        var valorMes = mes.options[mes.selectedIndex].value
        anio = document.getElementById("año").value
      
        diasNacimiento= new Date(anio,valorMes,dia)
        hoy = new Date()

        var edad = hoy.getFullYear()-diasNacimiento.getFullYear()
    
        var mes = hoy.getMonth() - diasNacimiento.getMonth()
    
        if (mes < 0 || (mes === 0 && hoy.getDate() < diasNacimiento.getDate())) {
            edad--;
        }

        document.getElementById("edad").innerHTML= edad
    }




}