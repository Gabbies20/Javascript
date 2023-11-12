/**
 * MAP:
 * Crean estructuras de tipo clave-valor, en las cuales las claves no se pueden repetir y tienen asociado un valor.
 * 
 * Pueden ser de cualquier tipo.
 * 
 * No pueden haber 2 elementso con la misma clave, pero sí se pueden repetir los valores.
 */

const provincias = new Map();


//Asignación valores, mediante set:

provincias.set(1,'Alava');
provincias.set(28,'Madrid');
provincias.set(41,'Sevilla');

provincias.set(21,'Loja').set(28,'Madrid').set(41,'Sevilla');

console.log(provincias);


//Asignación valores, mediante arrays:
const personas = new Map([[1,'Jóse'],[2,'María'],[3,'Elena']]);
console.log(personas);



//Operaciones sobre mapas:
//Obtener valores:
console.log(provincias.get(41));

//Buscar una clave:
console.log(provincias.has(41));
console.log(provincias.has('Sevilla'));

//Borrar valores:
//provincias.delete();


//Obtener objetos iterables:
let claves = provincias.keys();

for(let k of claves)
{
    console.log(k);
}


let valores = provincias.values();
for(let v of valores){
    console.log(v);
}


//Convertir mapas en arrays:
console.log(...provincias);

//Recorrer mapas:
for(let elemento of provincias){
	console.log(elemento);
}

for(let [clave,valor] of provincias)
{
	console.log(`Clave: ${clave}, Valor: ${valor}`);
}
