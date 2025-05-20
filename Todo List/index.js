let btn = document.querySelector('#btn');
let input = document.querySelector('#input');
let div = document.querySelector('.todoList');

function handleClick(){
  let p = document.createElement('p')
  p.innerText = input.value;
  input.value = '';
  div.appendChild(p);
  let deleteBtn = document.createElement('button')
  deleteBtn.innerText = 'Delete';
  p.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', ()=>{
    p.remove()
  })
}