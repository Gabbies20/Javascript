date1 = new Date();

console.log(date1.toLocaleTimeString())

console.log(setInterval(mostrarMinuto, 1000))

function mostrarMinuto(){
    date = new Date();
    console.log(date.toLocaleTimeString())
}