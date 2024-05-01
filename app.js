var h = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

setInterval(function(){
let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();


let hrotation = hour*30 + min/2;
let mrotation = min*6;
let srotation = sec*6;
// console.log(hrotation,mrotation,srotation);
// console.log(hours,min,sec);

h.style.transform = `rotate(${hrotation}deg)`;
minutes.style.transform = `rotate(${mrotation}deg)`;
seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);