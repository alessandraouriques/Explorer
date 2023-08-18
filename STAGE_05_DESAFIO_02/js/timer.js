export function Timer({
  minutesDisplay,
  secondsDisplay,
  minutes,
  seconds
}) {

function countDown(newMinutes, newSeconds) {
  let timerTimeOut;
  newMinutes = Number(minutesDisplay.textContent);
  newSeconds = Number(secondsDisplay.textContent);
  
  
  function resetTimer() {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0") 
    clearTimeout(timerTimeOut)
  }
  
  timerTimeOut = setTimeout(function() {
    let isFinished = newMinutes <= 0 && newSeconds <= 0
    

    if(isFinished){
      resetTimer()
      return
    }
    
    if(newSeconds <= 0) {
      newSeconds = 60
      --newMinutes
    }
    
    newSeconds = newSeconds - 1
    
    secondsDisplay.textContent = String(newSeconds).padStart(2, "0")
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    
    countDown()
  }, 1000)
  
  return
}

return {
  countDown,
  resetTimer
}

}