var numberOfSeconds = window.prompt("Enter seconds = ");

numberOfSeconds = Number(numberOfSeconds);
var h = Math.floor(numberOfSeconds / 3600);
var m = Math.floor(numberOfSeconds % 3600 / 60);
var s = Math.floor(numberOfSeconds % 3600 % 60);

var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "0 hour, ";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "0 minute, ";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "0 second";
console.log(hDisplay + mDisplay + sDisplay);