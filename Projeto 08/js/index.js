import { Timer } from "./timer.js"
import { Controls } from "./controls.js"
import { elements } from "./elements.js"

const {
  btnPlay,
  btnPause,
  btnStop,
  btnSet, 
  btnSoundOn,
  btnSoundOff,
  minutesDisplay,
  secondsDisplay
} = elements

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


