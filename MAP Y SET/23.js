/**
 * En este ejercicio, de cada módulo se desea guardar su nombre, duración y alumnos matriculados (módulo, duración, numAlumnos). Utiliza la estructura que sea más conveniente. 
Comprueba si existe en tu estructura el módulo “DWS” (Servidor) y si es así devuelve el número de alumnos matriculados en dicho módulo.
Calcula el número total de alumnos matriculados en todos los módulos

 */

const modulos = [
    {siglas:'DWES',nombre:'Desarrollo Web en Entorno Servidor',duracion: 6,num_alumnos:10},
    {siglas:'DWEC',nombre:'Desarrollo Web en Entorno Cliente',duracion: 6,num_alumnos:12},
    {siglas:'DIW',nombre:'Diseño de Interfaces Web',duracion: 6,num_alumnos:8},
]


const buscar_modulo = modulos.find((modulo)=>{
   if(modulo.siglas === 'DIW'){
    document.write(`El numero de alumnos del ${modulo.siglas} es: ${modulo.num_alumnos} <br>`)
   }else{
    document.write(`EL modulo ${modulo.siglas} no existe. <br>`)
   };
})


//Calcula el número total de alumnos matriculados en todos los módulos:


//FOREACH:
// Calcula el número total de alumnos matriculados en todos los módulos
var suma = 0;

modulos.forEach(modulo => {
    suma += modulo.num_alumnos;
});

document.write("Número total de alumnos matriculados en todos los módulos: " + suma + "<br>");

//REDUCE:
//array.reduce(function(acumulador, elementoActual, index, array) {
  // Código para acumular o transformar el acumulador
//}, valorInicial);

const sumaTotalAlumnos = modulos.reduce((suma, modulo) => {
    return suma + modulo.num_alumnos;
  }, 0);
  
  console.log("Número total de alumnos matriculados en todos los módulos:", sumaTotalAlumnos);
  














































































/**
 * // Crear un Map para almacenar información sobre módulos
let modulosMap = new Map();

// Añadir información sobre módulos después de la creación de la estructura
modulosMap.set("DWECL", { nombre: "Desarrollo Web en Entorno Cliente", duracion: "1 año", numAlumnos: 30 });
modulosMap.set("DAW", { nombre: "Desarrollo de Aplicaciones Web", duracion: "2 años", numAlumnos: 25 });
modulosMap.set("DWS", { nombre: "Desarrollo Web en Entorno Servidor", duracion: "1 año", numAlumnos: 20 });

// Mostrar cuántos módulos hay almacenados
console.log("Número de módulos almacenados:", modulosMap.size);

// Mostrar el contenido de la estructura
console.log("Contenido de la estructura:");
modulosMap.forEach((value, key) => {
  console.log(`${key}: ${value.nombre} (${value.duracion}) - ${value.numAlumnos} alumnos`);
});

// Devolver las abreviaturas de todos los módulos guardados
const abreviaturas = Array.from(modulosMap.keys());
console.log("Abreviaturas de los módulos:", abreviaturas);

// Devolver el nombre completo de todos los módulos
const nombres = Array.from(modulosMap.values()).map(modulo => modulo.nombre);
console.log("Nombres completos de los módulos:", nombres);

// Consultar si está el módulo "DAW" y, si está, eliminarlo
if (modulosMap.has("DAW")) {
  console.log("El módulo DAW está presente. Eliminándolo...");
  modulosMap.delete("DAW");
}

// Ordenar alfabéticamente el map según las abreviaturas de los módulos
modulosMap = new Map([...modulosMap.entries()].sort());

// Comprobar si existe el módulo "DWS" y devolver el número de alumnos matriculados
if (modulosMap.has("DWS")) {
  const numAlumnosDWS = modulosMap.get("DWS").numAlumnos;
  console.log(`El módulo DWS tiene ${numAlumnosDWS} alumnos matriculados.`);
}

// Calcular el número total de alumnos matriculados en todos los módulos
const totalAlumnos = Array.from(modulosMap.values()).reduce((total, modulo) => total + modulo.numAlumnos, 0);
console.log("Número total de alumnos matriculados en todos los módulos:", totalAlumnos);
 */
