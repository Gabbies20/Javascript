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
var ib2 = [i4,i5,i6];

var banda1 = new Banda('RBD','2004',ib1,'145236','POP');



console.log(banda1.mostrarIntegrantes());



console.log(banda1.mostrarBanda());