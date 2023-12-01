/**
 **/

document.addEventListener('DOMContentLoaded',function(){
    var miFormulario = document.getElementById('contactar');
//if(!miFormulario) return false;
for(var i = 0; i < miFormulario.elements.length;i++){
    if(miFormulario.elements[i].type == 'text'){
        var valorAntes = miFormulario.elements[i].value;

            // Limpia el valor
            miFormulario.elements[i].value = '';

            // Muestra el valor antes de limpiarlo en la consola
            console.log('Valor antes de limpiar:', valorAntes);
        miFormulario.elements[i].value = '';
    }
}

/**
 * var valorAntes = miFormulario.elements[i].value;

            // Limpia el valor
            miFormulario.elements[i].value = '';

            // Muestra el valor antes de limpiarlo en la consola
            console.log('Valor antes de limpiar:', valorAntes);
 */
})