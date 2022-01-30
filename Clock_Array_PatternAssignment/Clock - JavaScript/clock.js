setInterval(updateTime,1000);

var today = new Date();
var hours = today.getHours();
var mins = today.getMinutes();
var secs = today.getSeconds();

var hour = document.querySelector('table tr > td:nth-child(1) span');
var min = document.querySelector('table tr > td:nth-child(2) span');
var sec = document.querySelector('table tr > td:nth-child(3) span');

function updateTime(){
    if(secs == 59){
        if(mins == 59){

            hours = (hours + 1)%24;
        }
        mins = (mins + 1)%60;
    }
    secs = (secs + 1)%60;

    hour.innerHTML = hours;
    min.innerHTML = mins;
    sec.innerHTML = secs;
}