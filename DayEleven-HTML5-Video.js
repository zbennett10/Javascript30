//get elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const sliders = player.querySelectorAll('.player__slider');


//build functions

function togglePlay() {  //toggles play button
    video.paused === true ? video.play() : video.pause();
}

function pauseButtonUpdater(e) {
   if(e.type === 'pause') toggle.textContent = "►";
   else toggle.textContent = '││';
}

function skip(e) {
    video.currentTime += parseFloat(this.dataset.skip);
}

function sliderUpdate() {   
    video[this.name] = this.value;
}

function progressUpdate() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function handleProgressClick(e) {
    video.currentTime = parseFloat((e.offsetX / progress.offsetWidth) * video.duration);
    if(video.paused) video.play();
}

//hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', pauseButtonUpdater);
video.addEventListener('pause', pauseButtonUpdater);
video.addEventListener('timeupdate', progressUpdate);

skipButtons.forEach(button => button.addEventListener('click', skip));

toggle.addEventListener('click', togglePlay);

sliders.forEach(slider => slider.addEventListener('change', sliderUpdate));

progress.addEventListener('click', handleProgressClick);
