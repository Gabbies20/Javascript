var arr = [1,1,1,1,2,2,2,3,3,4,4,4,4,5,5]
var max = [];
var maxLength = 0;
var min = [];
var minLength = arr.length


for (let i of arr) {
    array = arr.filter(j => j == i)
    

    if(array.length >= maxLength){

        max.push(i)
        maxLength = array.length


    }else if(array.length <= minLength){

        min.push(i)
        minLength = array.length

    }
}

for(let i of max){
    array = arr.filter(j => j == i)

    if(array.length < maxLength ){
        max = max.filter(j => j != i)
    }
    
}

var max = new Set(max);


for(let i of min){
    array = arr.filter(j => j == i)

    if(array.length > minLength ){
        min = min.filter(j => j != i)
    }
    
}

var min = new Set(min);
console.log('Numero(s) mas repetido(s): ' + [...max])
console.log('Se repiten ' + maxLength + ' vez(ces)')

console.log('Numero(s) menos repetido(s): ' + [...min])
console.log('Se repiten ' + minLength + ' vez(ces)')



