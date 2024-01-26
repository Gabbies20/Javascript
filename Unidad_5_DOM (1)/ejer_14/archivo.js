window.addEventListener("load", function () {
    // Agregar evento click al botón
    document.getElementById("submitButton").addEventListener("click", function () {
        submitOrder();
    });
    var nombre = document.getElementById("name")
    nombre.addEventListener("input",function (){
        console.log(nombre.value);
        console.log(getCookie("userName"));
        if(getCookie("userName")==nombre.value && getCookie("userName")!=""){
            var input_num = document.getElementById("roomNumber");
            var p = document.createElement("p");
            var txt1 = document.createTextNode("¡Hola, " + getCookie("userName") + "! Tenemos una oferta especial para tu café favorito: " + getCookie("favoriteCoffees"))
            p.appendChild(txt1);
            input_num.insertAdjacentElement("afterend", p);
        }
    })
});

// Función para manejar el envío del formulario
function submitOrder() {
    var name = document.getElementById('name').value;
    var roomNumber = document.getElementById('roomNumber').value;

    var selectedCoffees = [];
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    checkboxes.forEach(function (checkbox) {
        selectedCoffees.push(checkbox.value);
    });

    // Crear una cookie para recordar las preferencias del usuario
    document.cookie = "userName=" + name + ";";
    document.cookie = "roomNumber=" + roomNumber + ";";
    document.cookie = "favoriteCoffees=" + selectedCoffees.join(',') + ";";

    alert("Su café será enviado a la habitación " + roomNumber + ". ¡Gracias por su pedido, " + name + "!");
}


// Función para obtener el valor de una cookie por su nombre
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
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
