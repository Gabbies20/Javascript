console.log(colocaEnMedio([1],[3,4,5]))

function colocaEnMedio(arr1, arr2){

    arr1.splice(arr1.length / 2, 0 , ...arr2)
   
    return arr1
}