function moduloEx5(num1, num2) {
  let string = '';
  if (num1 > num2) {
    string = `The number ${num1} is bigger than ${num2}`;
  if (num1%num2 !== 0)
 string = `The number ${num1} is bigger than ${num2}. But the modulo of ${num1} % ${num2} is ${num1%num2}`;
                   }
  else if (num1 < num2)
       string = `The number ${num1} is less than ${num2}`;
 else string = `The number ${num1} is equal to ${num2}`;
 return console.log(string);
}

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
