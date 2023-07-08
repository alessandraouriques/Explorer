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


function incrementMinutes() {
  let increment = 5
  let newMinutes = minutes + increment
  minutesDisplay.textContent = newMinutes
  return
}


play.addEventListener('click', function() {

})

stop.addEventListener('click', function() {
  
})

add.addEventListener('click', function() {
  incrementMinutes()
})

sub.addEventListener('click', function() {
  
})

forest.addEventListener('click', function() {
  
})

rain.addEventListener('click', function() {
  
})

coffee.addEventListener('click', function() {
  
})

fire.addEventListener('click', function() {
  
})