function mostrarElementos(){

    var ventana
    var elementos ="";
    var formulario = document.getElementById("contacto");



    for(var i = 0; i< formulario.elements.length-1; i++){
        elementos+=formulario.elements[i].name + " : " +formulario.elements[i].value.toUpperCase() +"\n"
    }

    
    ventana=window.open("")
    ventana.document.write(elementos)
    

    document.getElementById("edad").innerHTML =  sacaAño()

    document.getElementById("contenido").innerHTML =  elementos
}

function sacaAño(){
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


    return edad
}

