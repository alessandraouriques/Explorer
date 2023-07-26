import Sound from "./sounds.js"

const sound = Sound()

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const add = document.querySelector('.add');
const sub = document.querySelector('.sub');

const forestBtn = document.querySelector('#sounds').getElementsByTagName('button')[0];
const rainBtn = document.querySelector('#sounds').getElementsByTagName('button')[1];
const coffeeBtn = document.querySelector('#sounds').getElementsByTagName('button')[2];
const fireBtn = document.querySelector('#sounds').getElementsByTagName('button')[3];
const treeIcon = document.querySelector('#sounds').getElementsByTagName('svg')[0];
const rainIcon = document.querySelector('#sounds').getElementsByTagName('svg')[1];
const coffeeIcon = document.querySelector('#sounds').getElementsByTagName('svg')[2];
const fireIcon = document.querySelector('#sounds').getElementsByTagName('svg')[3];


let minutes = Number(minutesDisplay.textContent);
let seconds = Number(secondsDisplay.textContent);



function addMinutes() {
  if(minutes >= 0 && minutes <= 59) {
    minutes = minutes + 5
  }
  return minutes
}

function subMinutes() {
  if (minutes >= 6){
    minutes = minutes - 5
  }
  return minutes
}

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


play.addEventListener('click', function() {
  countDown(minutes, seconds)
})

stop.addEventListener('click', function() {
  resetTimer()
}) 

add.addEventListener('click', function() {
  minutesDisplay.textContent = addMinutes()
})

sub.addEventListener('click', function() {
  minutesDisplay.textContent = String(subMinutes()).padStart(2,"0")
})



forestBtn.addEventListener('click', function() {
  handleForest()
  sound.forest()
})

rainBtn.addEventListener('click', function() {
  handleRain()
  sound.rain()
})

coffeeBtn.addEventListener('click', function() {
  handleCoffee()
  sound.coffee()
})

fireBtn.addEventListener('click', function() {
  handleFire()
  sound.fire()
})

function handleForest() {
  forestBtn.classList.toggle('on')
  rainBtn.classList.remove('on')
  coffeeBtn.classList.remove('on')
  fireBtn.classList.remove('on')

  treeIcon.classList.toggle('whitePath')
  fireIcon.classList.remove('whitePath')
  rainIcon.classList.remove('whitePath')
  coffeeIcon.classList.remove('whitePath')
}

function handleRain() {
  rainBtn.classList.toggle('on')
  forestBtn.classList.remove('on')
  coffeeBtn.classList.remove('on')
  fireBtn.classList.remove('on')

  treeIcon.classList.remove('whitePath')
  rainIcon.classList.toggle('whitePath')
  coffeeIcon.classList.remove('whitePath')
  fireIcon.classList.remove('whitePath')
}

function handleCoffee() {
  forestBtn.classList.remove('on')
  rainBtn.classList.remove('on')
  coffeeBtn.classList.toggle('on')
  fireBtn.classList.remove('on')

  treeIcon.classList.remove('whitePath')
  rainIcon.classList.remove('whitePath')
  coffeeIcon.classList.toggle('whitePath')
  fireIcon.classList.remove('whitePath')
}

function handleFire() {
  forestBtn.classList.remove('on')
  rainBtn.classList.remove('on')
  coffeeBtn.classList.remove('on')
  fireBtn.classList.toggle('on')
  
  treeIcon.classList.remove('whitePath')
  rainIcon.classList.remove('whitePath')
  coffeeIcon.classList.remove('whitePath')
  fireIcon.classList.toggle('whitePath')
}