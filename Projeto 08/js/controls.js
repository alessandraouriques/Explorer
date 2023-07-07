export function Controls({
  btnPlay, 
  btnPause,
  btnStop,
  btnSet,
  btnSoundOff, 
  btnSoundOn
}) {
  
  function resetControls() {
    btnStop.classList.add('hide')
    btnSet.classList.remove('hide')
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
  }

  function handlePlay() {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    btnSet.classList.add('hide')
    btnStop.classList.remove('hide')
  }
   
  function handlePause() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
  }
  
  function handleStop() {
    resetControls()
  }
  
  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')

    if(!newMinutes) {
      return false
    }

    return newMinutes
  }
  
  function handleSoundOn() {
    btnSoundOn.classList.add('hide')
    btnSoundOff.classList.remove('hide')
  }
  
  function handleSoundOff() {
    btnSoundOn.classList.remove('hide')
    btnSoundOff.classList.add('hide')
  }

  return { 
    resetControls,
    handlePlay,
    handlePause,
    handleStop,
    getMinutes,
    handleSoundOn,
    handleSoundOff
  }
  
}