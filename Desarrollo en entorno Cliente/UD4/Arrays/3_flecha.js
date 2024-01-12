

uneArrays = (...arr) => {
    a = []
    for(i of arr){
        for(j = 0; j < i.length; j++)
        a.push(i[j])
    }

    return a
}

console.log(uneArrays([1,2,3,4], [5,6,7]))