const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');
const white = document.querySelector('#white');
const random = document.querySelector('#random');

red.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red'
})
blue.addEventListener('click', () => {
  document.body.style.backgroundColor = 'blue'
})
green.addEventListener('click', () => {
  document.body.style.backgroundColor = 'green'
})
white.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white'
})
random.addEventListener('click', randomColor);

function randomColor() {
  const red = Math.round(Math.random()*255);
  const green = Math.round(Math.random()*255);
  const blue = Math.round(Math.random()*255);

  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = randomColor 
}

//for other method we will just add onclick="randomColor()" on the random button

//other method
//We have to use onClick(setColor('color name of the button'))

// const body = document.querySelector('body');
// const buttons = document.querySelectorAll('button');

// function setColor(color) {
//   body.style.backgroundColor = color;
// }
