function getRandomInt() {
  let randomNum = Math.floor(Math.random()*100) + 1;
  return randomNum;
}

function moduloEx7() {
  let num1, num2 = getRandomInt();
  
    let string = '';
    if (num1 > num2) {
      string = `The number ${num1} is bigger than ${num2}`;
    if (num1%num2 !== 0)
   string = `The number ${num1} is bigger than ${num2}. But the modulo of ${num1} % ${num2} is ${num1%num2}`;
                     }
    else if (num1 < num2)
         string = `The number ${num1} is less than ${num2}`;
   else string = `The number ${num1} is equal to ${num2}`;
   return document.getElementById('output').innerHTML = string;
  }

