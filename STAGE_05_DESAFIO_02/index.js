const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const add = document.querySelector('.add');
const sub = document.querySelector('.sub');
const forest = document.querySelector('.forest');
const rain = document.querySelector('.rain');
const coffee = document.querySelector('.coffee_shop');
const fire = document.querySelector('.fire')

let minutes = Number(minutesDisplay.textContent);
let seconds = Number(secondsDisplay.textContent);


function addMinutes(minutes) {
  minutes = minutes + 5
  return minutes
}
 
function subMinutes(minutes) {
  minutes = minutes - 5
  return minutes
}

play.addEventListener('click', function() {

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

forest.addEventListener('click', function() {
  forest.style.background = '#02799D'
  forest.setAttribute("fill", "#02799D")
})

rain.addEventListener('click', function() {
  
})

coffee.addEventListener('click', function() {
  
})

fire.addEventListener('click', function() {
  
})