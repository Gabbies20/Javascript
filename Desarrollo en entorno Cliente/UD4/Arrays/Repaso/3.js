console.log(uneArrays([1,2,3,4], [5,6,7], [3,5]))

function uneArrays(...arr){
    a = []
    a.push(...[arr].join().split(","))
    return(a)
}