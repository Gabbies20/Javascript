codPostal  = "53999"

expCod = new RegExp('([1-4][0-9]|[5][0-2])[0-9]{3}');
validarCodigo = expCod.test(codPostal)

if(validarCodigo){
    alert("Código postal válido: " + codPostal)
}else{
    alert("Código postal inválido (Debe tener 5 dígitos y como máximo ser el 52999): " + codPostal)
}