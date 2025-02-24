let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec =0;
let sec = 0;
let mins = 0;

let timerId = null;

startBtn.addEventListener('click', function(){
    if(timerId != null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
    
});
stopBtn.addEventListener('click', function(){
        clearInterval(timerId);
});
resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = sec = mins = 00;
});
function startTimer(){
    msec++;
    if(msec==100){
        msec=0;
        sec++;
        if(sec==60){
            sec = 0;
            mins++
        }
    }
    let msecString;
    if (msec<10){
        msecString=`0${msec}`;
    } else{
        msecString=msec;
    }

    let secString;
    if (sec<10){
        secString=`0${sec}`;
    } else{
        secString=sec;
    }

    let minsString;
    if (mins<10){
        minsString=`0${mins}`;
    } else{
        minsString=mins;
    }
    timerDisplay.innerHTML = `${minsString} : ${secString} : ${msecString}`
}
