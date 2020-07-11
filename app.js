var hr  = 0;
var min = 0;
var sec = 0;
var hrHeading = document.getElementById("hour");
var minHeading = document.getElementById("minute");
var secHeading = document.getElementById("second");

function timer(){
  sec++;
  secHeading.innerHTML = sec;
  if(sec >= 10){
    min++;
    minHeading.innerHTML = min;
    sec = 0;
  }
  else if(min >= 2){
      hr++;
      hrHeading.innerHTML= hr;
      min =0;
  }

}

function start(){
  interval = setInterval(timer,1000);
}

function _stop(){
   clearTimeout(interval);

}

function reset(){
  hr = 0;
  min = 0;
  sec = 0;
  minHeading.innerHTML = min;
  secHeading.innerHTML = sec;
  hrHeading.innerHTML = hr;
  _stop();
}