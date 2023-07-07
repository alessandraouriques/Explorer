import { Timer } from "./timer.js"
import { Controls } from "./controls.js"
import { elements } from "./elements.js"
import Sound from "./sounds.js"

const sound = Sound()

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
  sound.pressButton()
});

btnPause.addEventListener('click', function() {
  controls.handlePause()
  timer.hold()
  sound.pressButton()
}); 

btnStop.addEventListener('click', function() {
  controls.handleStop()
  timer.resetTimer()
  sound.pressButton()
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

btnSoundOn.addEventListener('click', function() {
  controls.handleSoundOn()
  sound.bgAudio.play()
});

btnSoundOff.addEventListener('click', function() {
  controls.handleSoundOff()
  sound.bgAudio.pause()
});


