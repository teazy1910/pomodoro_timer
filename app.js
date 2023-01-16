// Variables
const pomodoroBtns = document.querySelectorAll(".button");

const countdownTimer = document.getElementById("countdown-timer");

const typeOfPomodoro = "work"; // toggle between "work" and "break"
let breakTime = 5,
  seconds = 0,
  interval,
  pomodoroSession = 25, // Value in minutes
  pomodoroTime = pomodoroSession * 60, // Value in second
  active = false;

// add 0.. to leading zero
function addZeros(num) {
  return num < 10 ? "0" + num : num;
}

// Events
const startBtn = document.getElementById("startBTN-js");
startBtn.addEventListener("click", startPomo);

const stopBTN = document.getElementById("stopBTN-js");
stopBTN.addEventListener("click", stopPomo);

let resetBtn = document.getElementById("resetBTN-js");
resetBtn.addEventListener("click", resetPomo);

let breakBtn = document.getElementById("breakBTN-js");
breakBtn.addEventListener("click", breakTimerDisplay);

// Break Timer Display
function breakTimerDisplay() {
  countdownTimer.innerText = `${breakTime}:${addZeros(seconds)}`;
  startPomo();
  breakTimer();
}

// Stop Pomodoro Timer
function stopPomo() {
  clearInterval(interval);
  console.log(interval);
}

// Reset Pomodoro Timer
function resetPomo() {
  stopPomo();
  countdownTimer.textContent = `${pomodoroSession}`;

  if (pomodoroSession) {
    pomodoroTime = pomodoroSession * 60;
    countdownTimer.textContent = `${formatTimerSeconds(pomodoroTime)}`;
  }
}

// Start and Display the timer
function startPomo() {
  clearInterval(interval);

  interval = setInterval(function () {
    pomodoroTime--;
    countdownTimer.textContent = `${formatTimerSeconds(pomodoroTime)}`;

    if (pomodoroTime <= 0) {
      stopPomo();
      breakTimer();
    }
  }, 1000);
}

const breakTimer = () => {
  clearInterval(interval);
  pomodoroTime = breakTime * 60;

  interval = setInterval(function () {
    pomodoroTime--;
    countdownTimer.textContent = `${formatTimerSeconds(pomodoroTime)}`;

    if (pomodoroTime <= 0) {
      resetPomo();
    }
  }, 1000);
};

function formatTimerSeconds(seconds) {
  let min = Math.floor(seconds / 60); // Ganzzahlig
  let sec = seconds % 60; // Rest
  // add 0.. to leading zero
  return min + ":" + (sec >= 10 ? sec : "0" + sec);
}
