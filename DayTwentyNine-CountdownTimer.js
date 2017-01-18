//globals
var countdown; //holds timer interval
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

//function that starts a countdown and uses displayTimeLeft function to display results
function timer(seconds) {
    // clear any existing timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds); //fixes the fact that setInterval takes a second to start running
    displayEndTime(then);

    countdown = setInterval(function() {
    const secondsLeft = Math.round((then - Date.now()) /1000);
    if(secondsLeft < 0) {
        clearInterval(countdown);
        return;
    }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

//does some math to show time left from countdown in minutes:seconds format
function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

//"https://bennett-timestamp-api.herokuapp.com/January 18, 2017" talk to my api

//
function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});

