const btnPlay = document.querySelector('.play');
const btnPause = document.querySelector('.pause');
const btnStop = document.querySelector('.stop');
const btnSet = document.querySelector('.set')
const btnSoundOn = document.querySelector('.sound-on');
const btnSoundOff = document.querySelector('.sound-off');

let minutesDisplay = document.querySelector('.minutes');
let secondsDisplay = document.querySelector('.seconds');
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

btnPlay.addEventListener('click', handlePlay);
btnPause.addEventListener('click', handlePause); 
btnStop.addEventListener('click', handleStop);
btnSet.addEventListener('click', handleSet)
btnSoundOn.addEventListener('click', handleSoundOn);
btnSoundOff.addEventListener('click', handleSoundOff);

function resetControls() {
  btnStop.classList.add('hide')
  btnSet.classList.remove('hide')
  btnPause.classList.add('hide')
  btnPlay.classList.remove('hide')
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}


function countdown() {
  timerTimeOut = setTimeout(function() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if(minutes <= 0) {
      resetControls()
      return
    }
    
    if(seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))
    
    countdown()
  }, 1000)
}


function handlePlay() {
  btnPlay.classList.add('hide')
  btnPause.classList.remove('hide')
  btnSet.classList.add('hide')
  btnStop.classList.remove('hide')

  countdown()
}
 
function handlePause() {
  btnPause.classList.add('hide')
  btnPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)
}

function handleStop() {
  resetControls()
  resetTimer()
}

function handleSet() {
  minutes = prompt('Quantos minutos?') || 0
  
  if(!minutes) {
    resetTimer()
  }

  updateTimerDisplay(minutes, 0)
}

function handleSoundOn() {
  btnSoundOn.classList.add('hide')
  btnSoundOff.classList.remove('hide')
}

function handleSoundOff() {
  btnSoundOn.classList.remove('hide')
  btnSoundOff.classList.add('hide')
}

