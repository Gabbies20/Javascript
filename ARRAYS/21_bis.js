let users = [];

function ingresarDatos() {
  while (true) {
    const entrada = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento separados por comas (o cadena vacía para salir):");
    if (entrada === "") {
      break;
    }
    const datos = entrada.split(",");
    users.push(datos);
  }
}

function imprimirDatos() {
  console.log("Datos de usuarios:");
  users.forEach((user, index) => {
    console.log(`Usuario ${index + 1}: ${user.join(", ")}`);
  });
}

function buscarPorApellidos(apellidos) {
  const result = users.filter(user => user[1] === apellidos);
  imprimirResultados("Búsqueda por apellidos", result);
}

function buscarPorDNI(dni) {
  const result = users.filter(user => user[2] === dni);
  imprimirResultados("Búsqueda por DNI", result);
}

function buscarPorEdad(edad) {
  const result = users.filter(user => calcularEdad(user[3]) === edad);
  imprimirResultados("Búsqueda por edad", result);
}

function calcularEdad(fechaNacimiento) {
  const nacimiento = new Date(fechaNacimiento);
  const hoy = new Date();
  const edad = hoy.getFullYear() - nacimiento.getFullYear();
  if (hoy.getMonth() < nacimiento.getMonth() || (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
}

function imprimirResultados(titulo, resultados) {
  console.log(`${titulo}:`);
  if (resultados.length === 0) {
    console.log("No se encontraron resultados.");
  } else {
    resultados.forEach((user, index) => {
      console.log(`Resultado ${index + 1}: ${user.join(", ")}`);
    });
  }
}

function mayorEdad() {
  const result = users.filter(user => calcularEdad(user[3]) >= 18);
  imprimirResultados("Usuarios mayores de edad", result);
}

function menorEdad() {
  const result = users.map(user => {
    const edad = 18 - calcularEdad(user[3]);
    return [user[0], user[1], edad > 0 ? `${edad} años para la mayoría de edad` : "Ya es mayor de edad"];
  });
  imprimirResultados("Usuarios menores de edad", result);
}

function modificaDatos() {
  const dni = prompt("Introduce el DNI del usuario cuyos datos quieres modificar:");
  const usuario = users.find(user => user[2] === dni);
  if (usuario) {
    const datoAModificar = prompt("¿Qué dato quieres modificar (nombre, apellidos, DNI o fecha de nacimiento)?");
    const nuevoValor = prompt(`Introduce el nuevo valor para ${datoAModificar}:`);
    const indice = ["nombre", "apellidos", "DNI", "fecha de nacimiento"].indexOf(datoAModificar);
    if (indice !== -1) {
      usuario[indice] = nuevoValor;
      console.log("Datos actualizados correctamente.");
    } else {
      console.log("Dato inválido.");
    }
  } else {
    console.log("Usuario no encontrado.");
  }
}

function eliminaUsuario() {
  const dni = prompt("Introduce el DNI del usuario que deseas eliminar:");
  const usuario = users.find(user => user[2] === dni);
  if (usuario) {
    const confirmacion = confirm(`¿Estás seguro de que deseas eliminar a ${usuario[0]} ${usuario[1]} (DNI: ${dni})?`);
    if (confirmacion) {
      users = users.filter(user => user[2] !== dni);
      console.log("Usuario eliminado correctamente.");
    }
  } else {
    console.log("Usuario no encontrado.");
  }
}

// Función principal
function main() {
  ingresarDatos();
  while (true) {
    const opcion = prompt(`Elige una opción:\n1. Imprimir datos\n2. Buscar por apellidos\n3. Buscar por DNI\n4. Buscar por edad\n5. Usuarios mayores de edad\n6. Usuarios menores de edad\n7. Modificar datos\n8. Eliminar usuario\n9. Salir`);
    switch (opcion) {
      case "1":
        imprimirDatos();
        break;
      case "2":
        buscarPorApellidos(prompt("Introduce apellidos a buscar:"));
        break;
      case "3":
        buscarPorDNI(prompt("Introduce DNI a buscar:"));
        break;
      case "4":
        buscarPorEdad(parseInt(prompt("Introduce la edad a buscar:")));
        break;
      case "5":
        mayorEdad();
        break;
      case "6":
        menorEdad();
        break;
      case "7":
        modificaDatos();
        break;
      case "8":
        eliminaUsuario();
        break;
      case "9":
        return;
      default:
        console.log("Opción inválida. Introduce un número del 1 al 9.");
        break;
    }
  }
}

main();
