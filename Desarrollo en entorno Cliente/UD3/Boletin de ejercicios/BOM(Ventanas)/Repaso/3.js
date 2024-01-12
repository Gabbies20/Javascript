var ventana

function abrirVentana(){
    ventana = window.open("", "MsgWindow", "height=500,width=300, location=yes,resizable=yes,scrollbars=yes,top=0,left=0,");
    ventana.document.write("El ojo es la ventana a tu alma")
}


function cerrarVentana(){
    ventana.close()
}