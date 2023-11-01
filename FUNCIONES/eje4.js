/**
 * Realizar una función que pase una cantidad de Mbyte, Kbytes y bytes a bytes. Probadla en una página.
 */

function convertirBytes(cantidadMbytes, cantidadKbytes, cantidadBytes) {
    
    const totalBytes = (cantidadMbytes * 1048576) + (cantidadKbytes * 1024) + cantidadBytes;
    
    return totalBytes;
  }

  const resultado = convertirBytes(2, 500, 70);
  console.log(`La cantidad total en bytes es: ${resultado}`);