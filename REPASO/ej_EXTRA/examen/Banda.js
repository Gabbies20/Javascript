class Banda {
    constructor(nombre, a_formacion, integrantes, telefono, estilo) {
        this.nombre = nombre;
        this.a_formacion = a_formacion;
        this.lista = integrantes;
        this.telefono = telefono;
        this.estilo = estilo;
    }

    mostrarBanda() {
        let cadena = '';
        cadena = document.write(`Nombre: ${this.nombre} <br>
                                Año de formación: ${this.a_formacion} <br>
                                Integrantes:${this.lista} <br>
                                Telefono: ${this.telefono} <br>
                                Estilo: ${this.estilo}`);

        return cadena;
    }

    mostrarIntegrantes() {

        let cadena = '';

        //Intentará concatenar un arrays de objetos
        this.lista.forEach( (e)=> {

            cadena += `${e.nombre}`

        });

        return cadena;

    }
}