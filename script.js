let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");


function getTime()
{
    let now = new Date();
    let nowHours=now.getHours();
    let nowMinutes=now.getMinutes();
    let nowSeconds=now.getSeconds();

    hours.textContent=nowHours<10?'0${nowHours}':nowHours;
    minutes.textContent=nowMinutes<10?'0${nowMinutes}':nowMinutes;
    seconds.textContent=nowSeconds<10?'0${nowSeconds}':nowSeconds;

}

getTime();
setInterval(getTime,1000)
