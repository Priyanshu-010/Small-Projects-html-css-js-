// const heading = document.querySelector('#h1');
const input = document.querySelector('#input');
// const button = document.querySelector('#btn');
const p = document.querySelector('#p');

function checkPalindrome() {
  const text = input.value;
  const reversedText = text.split('').reverse().join('');
  if(text === reversedText){
    p.textContent = `${text} is a palindrome`;
  }else{
    p.textContent = `${text} is not a palindrome`;
  }
  input.value = '';
}