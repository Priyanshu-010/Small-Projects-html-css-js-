let str = "hello";

function reverse(str){
  let rev = "";
  for(let i = str.length - 1; i >= 0; i-- ){
    rev += str[i];
  }
  return rev
}

const ans = reverse(str);
console.log(ans)