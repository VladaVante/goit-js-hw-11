import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const dateInput = document.querySelector("input#datetime-picker");
const startButton = document.querySelector("[data-start]");
console.log("🚀 ~ startButton:", startButton)
let countdownInterval;


flatpickr(dateInput, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const now = new Date();

    if (selectedDate <= now) {
    iziToast.error({
        message: "Please choose a date in the future",
    });
    startButton.disabled = true;
    } else {
    startButton.disabled = false;
    }
},
});


function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}


function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function updateTimer({ days, hours, minutes, seconds }) {
    document.querySelector("[data-days]").textContent = addLeadingZero(days);
    document.querySelector("[data-hours]").textContent = addLeadingZero(hours);
    document.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
    document.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
}

startButton.addEventListener("click", () => {
const selectedDate = new Date(dateInput.value);
    startButton.disabled = true;
    dateInput.disabled = true;

countdownInterval = setInterval(() => {
    const now = new Date();
    const timeRemaining = selectedDate - now;

    if (timeRemaining <= 0) {
    clearInterval(countdownInterval);
    updateTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    dateInput.disabled = false;
    return;
    }

    const timeComponents = convertMs(timeRemaining);
    updateTimer(timeComponents);
}, 1000);
});