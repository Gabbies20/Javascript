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