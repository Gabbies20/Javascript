/**
 * Utiliza un map almacenar información sobre módulos impartidos en el IES de la siguiente manera:  ("DWECL", “Desarrollo Web en Entorno Cliente”). Añade la información con posterioridad a la creación de la estructura.

Muestra cuántos módulos hay almacenados
Muestra el contenido de la estructura
Devuelve las abreviaturas de todos los módulos guardados
Devuelve el nombre completo de todos los módulos
Consulta si está el módulo "DAW"
Si está, elimínalo.
Ordena alfabéticamente el map según las abreviaturas de los módulos

 */

const modulos = new Map();

modulos.set('DWC','Desarrollo Web Cliente').set('DWS','Desarrollo Web Servidor').set('DIW','Desarrollo de Interfaces Web').set('EyE','Empresa e iniciativa Emprendedora');

//Muestra cuantos modulos hay almacenados:
console.log(`Hay almacenados ${modulos.size} módulos.`);

//Muestra el contenido de la estructura:
console.log(modulos);


//Devuelve las abreviaturas de todos los módulos guardados:
for ( let [clave,valor] of modulos){
    document.write(clave +'<br>');
}

//Devuelve el nombre completo de todos los módulos:
for (let [clave,valor] of modulos){
    document.write(valor +'<br>');
}

//Consulta si está el módulo DAW:
var consulta = modulos.has('DAW');
document.write(consulta)

//Si esta eliminalo:
modulos.delete('DAW');

//Ordena alfabéticamente el map según las abreviaturas de los módulos:
//1. Para ordenarlo debemos pasarlo array.
console.log(...modulos);
console.log(modulos.sort());
