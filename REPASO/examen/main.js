/**
 * 
 */
var i = new Integrante('77878285M','Anahi','Carpa');
var i2 = new Integrante('77878285I','Roberta','Carpito');
var i3 = new Integrante('77878285O','Maite','Carpazo');
var i4 = new Integrante('77878285P','Gabriela','Carpato');
var i5 = new Integrante('77878285Y','Veronica','C.');
var i6 = new Integrante('77878285T','Angel','Celo');

var ib1 = [i,i2];
console.log(typeof(ib1));
var ib2 = [i4,i5];
var ib3 = [i3,i6];

var banda1 = new Banda('RBD',2004,ib1,'145236','POP');
var banda2 = new Banda('CNCIO',2015,ib2,'147852','ROCK');
var banda3 = new Banda('RIO',2011,ib3,'789654','METAL');


//Array que contiene bandas:
var bandas = [banda1,banda2,banda3];


//Llamando al método para mostrar los integrantes de la banda:
banda1.mostrarIntegrantes();
document.write(`<hr>`)


//Llamando al método para mostrar banda:
banda1.mostrarBanda();
document.write('<hr>');


//Función para imprimir listado de bandas:
function imprimirBandas(){
    document.write(`<strong> LISTA DE BANDAS: </strong><br>`)
    bandas.forEach((e) => {
        document.write(` -${e.nombre} <br> `)
    })

}

//LLamar a la función imprimirBandas():
console.log(imprimirBandas());
document.write(`<hr>`);

//Funcion para buscarBandaPorNombre:
function buscarBandaPorNombre(nombreBanda) {
    var r = bandas.find((e) => {
        return e.nombre === nombreBanda;
    });

    if (r) {
        document.write(`La banda que busca es ${r.nombre}`);
    } else {
        document.write(`La banda no existe.`);
    }
}

//Llamamos a la función buscarBandaPorNombre:
console.log(buscarBandaPorNombre('RIO'));
document.write(`<hr>`)

//Funcion buscarBnadasPorEstilo:
function buscarBandasPorEstilo(estilo){
    var r = bandas.find((e) => {
        return e.estilo === estilo;
    });

    if(r){
        document.write(`La banda que corresponde al estilo es ${r.nombre}`);
    }else{
        document.write(`Ese estilo musical no corresponde con ninguna banda.`)
    }
}

//LLamamos a la función:
console.log(buscarBandasPorEstilo('POP'));
document.write(`<hr>`)


//Funcion ordenarBandas:
function ordenarBandas(bandas){
    return bandas.sort((a,b) => a.a_formacion - b.a_formacion);
}

//Llamamos a la función:
console.log(ordenarBandas(bandas));
console.log(imprimirBandas());
document.write(`<hr>`)


//Funcion eliminarBanda(banda):
function eliminarBanda(banda){
    var r = bandas.includes(banda);

    if(r){
        bandas.splice(bandas.indexOf(r),1);
    }else{
        console.log('La banda no existe.');
    }
}


//Llamar a la funcion:
console.log(eliminarBanda(banda2));
console.log(imprimirBandas());

