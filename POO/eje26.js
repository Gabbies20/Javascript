var punto1 = new Punto(3,3);
var punto2 = new Punto(6,1);

var o_rectangulo = new Rectangulo(punto1,punto2);
console.log(`La base del rectángulo es ${o_rectangulo.calcularBase()}`);
console.log(`La altura del rectángulo es ${o_rectangulo.calcularAltura()}`);
console.log(`El perimetro del rectangulo es ${o_rectangulo.hallarPerimetro()}`);
console.log(`El área del rectángulo es ${o_rectangulo.hallarArea()}`);