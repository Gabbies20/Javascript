titulo = "¡¡Sólo quedan 20 días de ofertas!!";


setInterval(tituloA, 300);

function tituloA() {
  document.title=titulo;
  titulo = titulo.substring(1,titulo.length) + titulo.charAt(0);
  console.log(titulo)
  
}