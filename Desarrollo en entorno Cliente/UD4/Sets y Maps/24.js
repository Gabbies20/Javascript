

arrLista = [5,2,3,7,9,6,6,7,4,4,2,1]

console.log(sinRepetir(arrLista.sort()))


function sinRepetir(array){
    var lista = new Set(array)
    return lista
}