var ventana;

function abrirVentana() {
    ventana = window.open("ejer6_1.html", ""); 

}

function detenerVentana() {
    ventana = window.open("ejer6_1.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"); 
    ventana.stop();
}


function cerrarVentana() {
    ventana.close();
} 

function focoVentana() {
    ventana.focus();
}

function blurVentana() {
    ventana.blur();
} 

function scrollAbs() {
    ventana.scroll(0,1000);
} 

function scrollRel() {
    ventana.scrollBy(0,10);
} 

function MovAbs(){
    ventana.moveTo(500, 500)
}

function MovRel(){
    ventana.moveTo(-50, -50)
}

function redAbs(){
    ventana.resizeTo(500,500)
}

function MovRel(){
    ventana.resizeBy(-50, -50)
}