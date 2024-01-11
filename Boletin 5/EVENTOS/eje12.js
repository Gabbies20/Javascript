/**
 * Hacer   un   enlace   que   cambia   su   color   de   fondo   (azul   claro)   cuando   el   ratón   puntero   se sitúa sobre él. 
 */

window.addEventListener('load',()=> {

    document.getElementById('enlace').addEventListener('mouseover',()=>{
        let enlace = document.getElementById('enlace');
        enlace.style.color = 'green'
    });
    
});