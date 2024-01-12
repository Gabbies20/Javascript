
var numCarrito = 0;
function moverProducto(){
    
    document.getElementById("imagen_prod1").classList.toggle('animaImagen');
    numCarrito +=1
    document.getElementById("num_carrito").innerHTML = numCarrito;
    


}

window.onload = function(){
    let imgs=document.querySelectorAll(".imagenes_carrito img")

    for(let img of imgs){
        img.addEventListener("click",function(){
            document.querySelector(".contenido_prod #imagen_prod").setAttribute("src",this.getAttribute("src"))
        })
    }
}

