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

console.log(minutes)


function addMinutes(minutes) {
  minutes = minutes + 5
  return minutes
}

function subMinutes(minutes) {
  minutes = minutes - 5
  return minutes
}

play.addEventListener('click', function() {
  focus()
  countdown(minutes, seconds)
})

stop.addEventListener('click', function() {
  
}) 

add.addEventListener('click', function() {
  if(minutes >= 0 && minutes <= 59) {
    minutes = addMinutes(minutes)
  }
  else if(minutes >= 60){
    return
  }
  minutesDisplay.textContent = String(minutes).padStart(2, "0") 
})

sub.addEventListener('click', function() {
  if (minutes >= 6){
    minutes = subMinutes(minutes)
  }
  else if(minutes <= 5) {
    return
  }
  
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
})



setTimeout(function(){

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