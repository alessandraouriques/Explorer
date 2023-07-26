export default function () {
  let forestSound = new Audio("../assets/Floresta.wav");
  let rainSound = new Audio("../assets/chuva.wav");
  let coffeeSound = new Audio("../assets/Cafeteria.wav");
  let fireSound = new Audio("../assets/Lareira.wav");

  function forest() {
    rainSound.pause();
    coffeeSound.pause();
    fireSound.pause();
    return forestSound.paused ? forestSound.play() : forestSound.pause();
  }

  function rain() {
    forestSound.pause();
    coffeeSound.pause();
    fireSound.pause();
    return rainSound.paused ? rainSound.play() : rainSound.pause();
  }

  function coffee() {
    forestSound.pause();
    rainSound.pause();
    fireSound.pause();
    return coffeeSound.paused ? coffeeSound.play() : coffeeSound.pause();
  }

  function fire() {
    forestSound.pause();
    rainSound.pause();
    coffeeSound.pause();
    return fireSound.paused ? fireSound.play() : fireSound.pause();
  }

  return { forest, rain, coffee, fire };
}
