date1 = new Date();

console.log(date1.toLocaleTimeString())

console.log(setInterval(myTimer, 60000));

function myTimer() {
  date = new Date();
  console.log(date.toLocaleTimeString());
}