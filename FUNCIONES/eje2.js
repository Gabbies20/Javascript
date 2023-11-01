/**
 * Diseñar un programa que compruebe si un texto contiene sólo caracteres de nuestro alfabeto. Deberá implementarse una función esAlfabetoEspaniol(texto) que devuelva true si lo es.
 */

function esAlfabetoEspaniol(texto) {
  //const regex = new RegExp('^[a-zA-ZáéíóúüñÑ,\\s]*$');
  const regex = /[a-záéíóúüñ,\s]*/i;
  const resultado = regex.test(texto);
  return resultado;
}

console.log(esAlfabetoEspaniol('Hola , cómo estás'));