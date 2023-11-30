/**
 * Escribir un programa con una función en JavaScript que tome como parámetros una fecha y un intervalo de tiempo en segundos. Por ejemplo: 

            cuentaAtras("10/03/2023", 60);

La función deberá utilizar expresiones regulares para validar que la fecha se encuentre en 
el formato "dd/mm/yyyy". A continuación, calculará la diferencia de tiempo en segundos entre la fecha actual y la fecha proporcionada como parámetro. Luego, la función deberá mostrar en la consola la cantidad de segundos que faltan para que se cumpla la fecha proporcionada, actualizándose cada dos segundos. Esta cuenta atrás parará cuando el intervalo de tiempo pasado como parámetro se haya cumplido. Si la cuenta atrás llega a cero, se deberá parar la actualización y mostrar en la consola un mensaje indicando que el tiempo ha expirado.
Si la fecha dada ha pasado ya, se informará al usuario, y terminará el programa.

 */

let id;

function cuentaAtras(fecha, s) {

    var d_fecha = fecha.split('/');
    console.log(d_fecha);

    var fecha = new Date(d_fecha[2], d_fecha[1] - 1, d_fecha[0]);
    console.log(fecha);

    var hoy = new Date();
    console.log(hoy.getTime());

    if (fecha < hoy) {
        alert('La fecha es anterior.')
    } else {
        var diferencia = fecha.getTime() - hoy.getTime();
        var segundos = diferencia / 1000;

        //Mostrar en consola la cantidad de segundos cada 2 segundos.
        id = setInterval(() => {
            segundos -= 2;
            console.log(segundos);

            s--;

            //Para ejecución con el valor del parametro de entrada:
            if (s <= 0) {
                console.log('El tiempo ha expirado.');
                clearInterval(id);
            }

        }, 2000);

        console.log('id' + id)

        return diferencia;
    }


}
console.log(cuentaAtras('30/11/2023', 7));