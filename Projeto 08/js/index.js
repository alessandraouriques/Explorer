import { Timer } from "./timer.js"
import { Controls } from "./controls.js"

const btnPlay = document.querySelector('.play');
const btnPause = document.querySelector('.pause');
const btnStop = document.querySelector('.stop');
const btnSet = document.querySelector('.set')
const btnSoundOn = document.querySelector('.sound-on');
const btnSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

const controls = Controls({
  btnPlay, 
  btnPause,
  btnStop,
  btnSet,
  btnSoundOff, 
  btnSoundOn
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.resetControls
})



btnPlay.addEventListener('click', function() {
  controls.handlePlay()
  timer.countdown()
});

btnPause.addEventListener('click', function() {
  controls.handlePause()
  timer.hold()
}); 

btnStop.addEventListener('click', function() {
  controls.handleStop()
  timer.resetTimer()
});

btnSet.addEventListener('click', function() {
  let newMinutes = controls.getMinutes()

  if(!newMinutes) {
    timer.resetTimer()
    return
  }

  timer.updateTimerDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})

btnSoundOn.addEventListener('click', Controls.handleSoundOn);
btnSoundOff.addEventListener('click', Controls.handleSoundOff);


