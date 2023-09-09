const currentDate = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentTime = document.querySelector('[data-testid="currentUTCTime"]');

const createCurrentDate = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const date = new Date();
const daysOfTheWeek = createCurrentDate[date.getDay()];
currentDate.innerHTML = `Day: ${daysOfTheWeek}`;

setInterval(() => {
  const currentTimer = Date.now();
  currentTime.innerHTML = `Time (ms): ${currentTimer}`;
},1000)