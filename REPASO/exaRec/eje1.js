
//Pacientes:
var p1 = new Paciente('Gabriela','Pinzón','1111',500);
var p2 = new Paciente('Danny','Ochoa','2222',502);
var p3 = new Paciente('Diana','Ochoa','3333',506);
var p4 = new Paciente('Angela','Jaramillo','4444',1000);

//Medicos:
var med1 = new Medico('Jose','Delgado','5555',400);
var med2 = new Medico('Alvaro','Blanco','6666',502);
var med3 = new Medico('Rob','Morffi','7777',506);
var med4 = new Medico('Alejandro','Arteaga','8888',1000);

//Citas Previa:
var cita1 = new CitaPrevia('2023-10-20',p2,med4);
var cita2 = new CitaPrevia('2023-05-21',p3,med3);
var cita3 = new CitaPrevia('2023-02-22',p4,med2);
var cita4 = new CitaPrevia('2023-01-24',p1,med1);


//Array de citas:
var citas = [];



//Funcion introduceCita:
function introduceCita(cita){
    if(buscarCita(cita)!=-1){
        document.write(`El paciente ya tiene una cita asignada, debe eliminarla para poder asignar otra.`);
    }else{


        //Push:devuelve la nueva longitud del array.
        citas.push(cita);
        document.write(`${cita.paciente.nombre} ${cita.paciente.apellido} <br>`);
    }
    return citas;
}
document.write(`PACIENTES CON CITAS ASIGNADAS: <br>`);
introduceCita(cita1);
introduceCita(cita2);
introduceCita(cita3);
introduceCita(cita4);

document.write('<hr>');


//Funcion buscarCita():
function buscarCita(cita){

    var r = citas.find((e) => {
        return e.paciente.nombre === cita.paciente.nombre;
    });

    if(r){
        return(`La cita es ${r}`);
    }else{
        console.log(`Esa cita aún no ha sido asignada.`);
        return -1;
    }

}
//LLamamos a la funcion buscarCita():
(buscarCita(cita1));
document.write(`<hr>`)

function eliminarCita(cita){

    var r = citas.includes(cita);
    if(r){
        citas.splice(citas.indexOf(r),1);
    }else{
        console.log(`La cita no existe.`);
    }

}

//Llamar la funcion:
document.write(`---LISTA DE CITAS ANTES DE ELIMINAR--- <br>`);
console.log(mostrarCitas());
console.log(eliminarCita(cita3));
document.write(`<hr>`)

//Funcion mostrarBandas():
function mostrarCitas(){
    citas.forEach((e) => {
        document.write(`-Hora:${e.fechaHora} Paciente:${e.paciente.nombre}  ${e.paciente.apellido} Médico:${e.medico.nombre} ${e.medico.apellido}<br>`);
    })
}
document.write(`---LISTA DE CITAS DESPUÉS DE ELIMINAR--- <br>`);
console.log(mostrarCitas());
document.write(`<hr>`);



//Funcion ordenarCitas();
function ordenarCitas(citas){
    return citas.sort((a,b)=>  new Date(a.fechaHora) - new Date(b.fechaHora));
}

console.log(ordenarCitas(citas));
document.write(`---LISTA DE CITAS ORDENADAS POR FECHA--- <br>`);
console.log(mostrarCitas());
document.write(`<hr>`)
/**
 * var fecha = new Date(cita1.fechaHora);
console.log(fecha);
 */

https://github.com/AlbertoCaroBarrera/Js