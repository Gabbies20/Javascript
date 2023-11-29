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

    mostrarIntegrantes(){
        document.write("Miembros de la banda ' " + this.getNombre() +  "' <br>")
        this.lista.forEach(element => {
            document.write(`${element.nombre} `);
        });
    }

    getNombre(){
        return this.nombre;
    }

    getEstilo(){
        return this.estilo;
    }

    getAnio(){
        return this.anioFormacion;
    }


}