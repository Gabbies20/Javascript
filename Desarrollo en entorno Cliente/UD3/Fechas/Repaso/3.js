tiempo = 6003

var hour = Math.floor(tiempo / 3600);
hour = (hour < 10)? '0' + hour : hour;
var minute = Math.floor((tiempo / 60) % 60);
minute = (minute < 10)? '0' + minute : minute;
var tiempo = tiempo % 60;
tiempo = (tiempo < 10)? '0' + tiempo : tiempo;

console.log( hour + ':' + minute + ':' + tiempo)