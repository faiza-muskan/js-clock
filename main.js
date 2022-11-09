const hours = document.getElementById("hr");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");

setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let hr = hour * 30 + min / 2;
  let min = minute * 6;
  let sec = second * 6;

  hours.style.transform = `rotateZ(${hr}deg)`;
  minutes.style.transform = `rotateZ(${min}deg)`;
  seconds.style.transform = `rotateZ(${sec}deg)`;
}, 1000);
