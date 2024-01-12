window.addEventListener("load",inicio)

function inicio(){
    nombre = document.getElementById("nombre")

    nombre.addEventListener("blur", convierteMinusculas)

    function convierteMinusculas() {
        console.log(nombre.value)
        valorNombre = nombre.value
        nombre.value=valorNombre.toLowerCase()
    }
}