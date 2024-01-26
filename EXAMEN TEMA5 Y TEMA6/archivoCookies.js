window.addEventListener('load', iniciar);

function iniciar() {

    var nombre = document.getElementById('name');
    var numero_hab = document.getElementById('roomNumber');
    var cafes = [...document.querySelectorAll("input[type='checkbox']")]
    var cafes_seleccionado = []
    var boton = document.getElementById('boton');

    for (var cafe of cafes) {
        cafe.addEventListener('input', function (e) {
            cafe = e.currentTarget
            if (cafe.checked) {
                cafes_seleccionado.push(cafe.value)
            }
        })
    }

    boton.addEventListener('click', function () {
        nombre = nombre.value;
        numero_hab = numero_hab.value;
        cafes_seleccionado = cafes_seleccionado[0]
        //localStorage.setItem('nombre', nombre);
        //localStorage.setItem('numero habitacion', numero_hab);
        //localStorage.setItem('cafes_seleccionado', cafes_seleccionado);
        
        setCookie('nombre',nombre);
        setCookie('numero_hab',numero_hab);
        setCookie('cafes_seleccionado',cafes_seleccionado);

        
        alert('Enviando cafe ' + cafes_seleccionado + ' a su habitacion ' + numero_hab + ' , Disfrutalo ' + nombre + '!!')
    })

    nombre.addEventListener('keyup', function () {
        //if (localStorage.getItem('nombre')) {
        if (getCookie('nombre')) {
            //if (nombre.value == localStorage.getItem('nombre')) {
            if (nombre.value == getCookie('nombre')) {
                //alert("hay  una tarifa especial para su " + localStorage.getItem('cafes_seleccionado') + " , Disfrutelo " + localStorage.getItem('nombre'))
                alert("hay  una tarifa especial para su " + getCookie('cafes_seleccionado') + " , Disfrutelo " + getCookie('nombre'))
            }
        }
    })
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}