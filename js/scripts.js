function convert(number1) {
  return number1 * 3.78541;
}

const number1 = parseInt(prompt("Enter a number in gallons:"));

const result = convert(number1);
alert(result);