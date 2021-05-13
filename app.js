let hour = document.querySelector('.hour'),
    min = document.querySelector('.minute'),
    sec = document.querySelector('.seconds');


setInterval(clock,1000);

function clock() {
 let day= new Date();
 let h = day.getHours() * 30;
 let m = day.getMinutes() * 6;
 let s = day.getSeconds() * 6;

 hour.style.transform = `rotate(${h}deg)`;
 min.style.transform = `rotate(${m}deg)`;
 sec.style.transform = `rotate(${s}deg)`;
};