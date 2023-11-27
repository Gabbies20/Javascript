class Usuario {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  }
  
  const listaDeUsuarios = [
    new Usuario("Alice", 25),
    new Usuario("Bob", 30),
    new Usuario("Charlie", 22)
  ];
  
  console.log(listaDeUsuarios);
  
/**
 * 
 */

class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  const listaDeProductos = [
    new Producto("Laptop", 1200),
    new Producto("Teléfono", 500),
    new Producto("Auriculares", 80)
  ];
  
  console.log(listaDeProductos);

  

  /**
   * 
   */
  class Tarea {
    constructor(descripcion, completada) {
      this.descripcion = descripcion;
      this.completada = completada;
    }
  }
  
  const listaDeTareas = [
    new Tarea("Hacer la compra", false),
    new Tarea("Estudiar JavaScript", true),
    new Tarea("Ir al gimnasio", false)
  ];
  
  console.log(listaDeTareas);

  
  /**
   * 
   */

  class Estudiante {
    constructor(nombre, edad, calificacion) {
      this.nombre = nombre;
      this.edad = edad;
      this.calificacion = calificacion;
    }
  }
  
  const listaDeEstudiantes = [
    new Estudiante("Elena", 21, 90),
    new Estudiante("David", 22, 85),
    new Estudiante("Laura", 20, 95)
  ];
  
  console.log(listaDeEstudiantes);
  


