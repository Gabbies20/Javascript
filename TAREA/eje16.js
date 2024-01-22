window.addEventListener("load", function() {
    var arrayDatos = ["Manzana", "Banana", "Cereza", "Dátil", "Fresa", "Uva", "Limón", "Mango"];

    var campoBusqueda = document.getElementById("campoBusqueda");
    var resultadosDiv = document.getElementById("resultados");

    campoBusqueda.addEventListener("input", function() {
        var busqueda = campoBusqueda.value.toLowerCase();
        var coincidencias = buscarCoincidencias(arrayDatos, busqueda);

        mostrarResultados(coincidencias);
    });

    function buscarCoincidencias(array, busqueda) {
        return array.filter(function(item) {
            return item.toLowerCase().includes(busqueda);
        });
    }

    function mostrarResultados(resultados) {
        resultadosDiv.innerHTML = "";

        if (resultados.length === 0) {
            resultadosDiv.textContent = "No se encontraron coincidencias.";
        } else {
            resultados.forEach(function(resultado) {
                var p = document.createElement("p");
                p.textContent = resultado;
                resultadosDiv.appendChild(p);
            });
        }
    }
});