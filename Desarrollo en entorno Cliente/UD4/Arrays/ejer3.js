var ventana;

function abrirVentana() {
    ventana = window.open("", "MsgWindow", "height=200,width=300, location=yes,resizable=yes,scrollbars=yes,top=0,left=0,");

    ventana.document.write("<p>El ojo es la ventana a tu alma </p>");
}


function cerrarVentana() {
    ventana.close();
  }