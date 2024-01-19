let milSec = 0;
let timer;
let btnStart=document.getElementById("start");

document.getElementById("start").addEventListener("click", startTimer);
 document.getElementById("pause").addEventListener("click",pauseTimer);
 document.getElementById("reset").addEventListener("click",resetTimer);

 function resetTimer(){
    clearInterval(timer);
    milSec=0;
    updateTime(milSec);
    document.getElementById("miliSec").innerText =0+"0";
    btnStart.disabled=false;
 }

function pauseTimer(){
    clearInterval(timer);
    btnStart.disabled=false;
}

function startTimer() {
    timer = setInterval(() => {
        milSec += 10;
        updateTime(milSec)
    }, 10)
    btnStart.disabled=true;
    
}

function updateTime(miliSec) {
    const sec = Math.floor(miliSec / 1000);
    const min = Math.floor(miliSec / 60000);
    const ms = (miliSec % 1000) / 10;

    document.getElementById("miliSec").innerText =ms;
    document.getElementById("sec").innerText = sec<10 ?"0"+ sec%60 : sec%60;
    document.getElementById("min").innerText = min<10 ? "0"+min%60:min%60;
}