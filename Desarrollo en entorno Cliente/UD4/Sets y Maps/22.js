modulos = new Map()

modulos.set("DAW","Despliegue de aplicaciones Web").set("DWC","Desarrollo Web en Cliente")

//Número de modulos
console.log(modulos.size)

//Contenido de la estructura
console.log(modulos)

//Devolver abreviaturas y nombres 
for (let[clave,valor] of modulos){
    
    //Devolver abreviatura
    console.log(clave)

    //Devolver nombre 
    console.log(valor)
}

//Encontrar modulo
arrModulo = [...modulos]
//Buscar modulo DAW
console.log(modulos.has("DAW"))

//Eliminar modulo
if(modulos.has("DAW")){
    modulos.delete("DAW")
}

//Ordenar el modulo alfabéticamente
modulos = new Map(arrModulo.sort())
console.log(modulos)