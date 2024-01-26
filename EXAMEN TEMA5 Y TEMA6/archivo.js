/**
 * 
 */

window.addEventListener('load',iniciar);

function iniciar() {

    var nombre = document.getElementById('name');
    var numero_hab = document.getElementById('roomNumber');
    var cafes = [...document.querySelectorAll("input[type='checkbox']")]
    var cafes_seleccionado = []
    var boton = document.getElementById('boton');

    for (var cafe of cafes){
        cafe.addEventListener('input',function(e){
            cafe = e.currentTarget
            if (cafe.checked){
                cafes_seleccionado.push(cafe.value)
            }
        })
    }

    boton.addEventListener('click',function(){
        nombre = nombre.value;
        numero_hab = numero_hab.value;
        cafes_seleccionado = cafes_seleccionado[0]
        localStorage.setItem('nombre',nombre);
        localStorage.setItem('numero habitacion',numero_hab);
        localStorage.setItem('cafes_seleccionado',cafes_seleccionado);
        alert('Enviando cafe ' + cafes_seleccionado + ' a su habitacion ' + numero_hab + ' , Disfrutalo ' + nombre + '!!')
    })

    nombre.addEventListener('keyup',function(){
        if (localStorage.getItem('nombre')){
            if (nombre.value == localStorage.getItem('nombre')){
                console.log(localStorage.getItem('nombre'))
                alert( "hay  una tarifa especial para su " + localStorage.getItem('cafes_seleccionado') + " , Disfrutelo " + localStorage.getItem('nombre'))
            }
        }
        
    })
}