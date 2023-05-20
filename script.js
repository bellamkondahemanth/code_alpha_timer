let startId = document.getElementById("startId");
let stopId = document.getElementById("stopId");
let resetId = document.getElementById("resetId");
let timerId = document.getElementById("timerId");

let msec = 00;
let sec = 00;
let min = 00;

let timer = null;

function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }
    }
    let msecString;
    if (msec < 10) {
        msecString = `0${msec}`;
    } else {
        msecString = msec;
    }
    let SecString;
    if (sec < 10) {
        SecString = `0${sec}`;
    } else {
        SecString = sec;
    }
    let minString;
    if (min < 10) {
        minString = `0${min}`;
    } else {
        minString = min;
    }
    timerId.textContent = `${minString} : ${SecString} : ${msecString}`;
}

resetId.addEventListener("click", function() {
    clearInterval(timer);
    timerId.textContent = "00 : 00 : 00";
    min = sec = msec = 00;

});
stopId.addEventListener("click", function() {
    clearInterval(timer);

});

startId.addEventListener("click", function() {
    if (timerId !== null) {
        clearInterval(timer);
    }
    timer = setInterval(startTimer, 10);
})
