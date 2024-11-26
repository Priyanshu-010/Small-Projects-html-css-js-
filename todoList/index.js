// const arr = [];

// function addTodo() {
//   let todo = document.querySelector("input");
//   const list = todo.value
//   arr.push(list);
//   console.log(arr)
//   todo.value = '';
// }

const arr1= ['make dinner', 'clean room', 'do homework'];

let arr1Html = '';

for (let i = 0; i < arr1.length ; i++){
  const todoList = arr1[i];
  const html = `<p>${todoList}</p>`;
  arr1Html = arr1Html + html;
}
// console.log(arr1Html)

const div = document.querySelector('.todo-list')
div.innerHTML = arr1Html
//Loops

// let i = 1;
// while(i<=5){
//   console.log(i);
//   i++
// }


// for(let i= 1; i<=5; i++){
//   console.log(i)
// } 

// let randomNumber = 0;

// while(randomNumber < 0.5){
//   randomNumber = Math.random();
//   console.log(randomNumber)
// }

// console.log(randomNumber);    

//Foreach loop

// const fruits = ["banana", "apple", "orange", "grape", "mango"];

// fruits.forEach((fruit) =>{
//   console.log(fruit)
// })

const numbers = [1,2,3,4,5];
// let total = 0;

// for (i = 0; i < numbers.length; i++){
//   const nums = numbers[i];
//   total = total + nums;
// }
// console.log(total)  

// const numsDoubled = [];
// for (i = 0; i<numbers.length; i++){
//   const nums = numbers[i];
//   numsDoubled.push(nums*2);
// }
// console.log(numsDoubled)