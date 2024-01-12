console.log(uneArray([1,2,3],[4,5,6],[7,8,9]))

function uneArray(...arr){
    nuevoArr = []

    for(i of arr){
        for(j = 0; j < i.length; j++)
        nuevoArr.push(i[j])
    }
    return nuevoArr
}