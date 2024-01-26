window.addEventListener("load", function() {
    // Obtener el formulario y el campo de dirección
    var addressInput = document.getElementById("address");

    // Obtener el botón de enviar
    var submitButton = document.getElementById("submitButton");

    // Verificar si hay una cookie de dirección almacenada al cargar la página
    var storedAddress = getCookie("userAddress");
    if (storedAddress !== "") {
        // Si hay una cookie, rellenar automáticamente el formulario
        addressInput.value = storedAddress;
    }

    // Agregar evento click al botón de enviar
    submitButton.addEventListener("click", function() {
        // Obtener el valor de la dirección ingresada
        var enteredAddress = addressInput.value;

        // Guardar la dirección en una cookie
        document.cookie = "userAddress=" + encodeURIComponent(enteredAddress) + ";";

        alert("Dirección enviada con éxito: " + enteredAddress);
    });
});

// Función para obtener el valor de una cookie por su nombre
function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}
