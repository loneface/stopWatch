const startBtn = document.getElementById("start_btn");
const stopBtn = document.getElementById("stop_btn");
const resetBtn = document.getElementById("reset_btn");

let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let count = null;

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerText = h + ":" + m + ":" + s;
}

startBtn.addEventListener("click", () => {
  if (count !== null) {
    clearInterval(count);
  }
  count = setInterval(stopwatch, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(count);
});
resetBtn.addEventListener("click", () => {
  clearInterval(count);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerText = "00:00:00";
});
