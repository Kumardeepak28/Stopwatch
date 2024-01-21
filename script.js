var timerInMs = 0;
var timer;

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

const btn = document.getElementById("start");


function resetTimer() {
    clearInterval(timer)
    timerInMs = 0;
    updateTime(timerInMs);
    btn.disabled = false;
}
function stopTimer(){
    clearInterval(timer);
    btn.disabled = false;
}
function startTimer() {
    timer = setInterval(()=>{
    timerInMs+=10;
    updateTime(timerInMs);
    },10)
    btn.disabled = true;
}


function updateTime(timerInMS) {

    // timerInMS = 2400 (2 sec and 400 ms)
    const sec = Math.floor(timerInMS/1000); //second
    const min = Math.floor(timerInMS/60000); //minutes
    const ms = (timerInMS % 1000) / 10; //ms


document.getElementById("min").innerText = min<10 ? "0" + min%60 : min%60;

document.getElementById("sec").innerText = sec<10 ? "0" + sec%60 : sec%60;

document.getElementById("ms").innerText = ms < 10 ? "0" + ms : ms;
}
