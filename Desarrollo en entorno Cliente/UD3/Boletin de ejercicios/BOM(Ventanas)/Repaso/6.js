var ventana

function abrirVentana(){
    ventana = window.open("6_1.html", "", "width=400, height=400"); 
}


function detenerVentana(){
    ventana = window.open("6_1.html", "", "width=400, height=400"); 
    ventana.stop();
}


function cerrarVentana(){
    ventana.close();
}


function focoVentana(){
    ventana.focus();
}


function quitarFoco(){
    ventana.blur();
}


function scrollAbs(){
    ventana.scroll(0,1000);
}

function scrollRel() {
    ventana.scrollBy(0,10);
} 

function movAbs(){
    self.moveTo(500,150)
}

function MovRel(){
    self.moveTo(-50, -50)
}