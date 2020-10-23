const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const ocassaionDate = "14 Nov 2020";

function countdown(ocassaionDate) {
  const ocassaionDateObj = new Date(ocassaionDate);
  const currentDate = new Date();

  const totalSeconds = Math.floor((ocassaionDateObj - currentDate) / 1000);
  // console.log(totalSeconds);
  if (totalSeconds >= 0) {
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;

    daysEl.innerText = formatTime(days);
    hoursEl.innerText = formatTime(hours);
    minsEl.innerText = formatTime(mins);
    secondsEl.innerText = formatTime(seconds);
  } else {
    const div = document.createElement("h1");
    div.innerText = "The Day has come Enjoy!!😊😊";
    document.body.appendChild(div);
    clearInterval(hello);
  }
}

function formatTime(time) {
  return time < 10 && time >= 0 ? `0${time}` : time;
}

countdown(ocassaionDate);

const hello = setInterval(countdown.bind(this, ocassaionDate), 1000);
