function add(number1: number, number2: number) {
  // if (typeof number1 !== "number" || typeof number2 !== "number") {
  //   throw new Error("Incorrect input");
  // }
  return number1 + number2;
}

const number1 = 4;
const number2 = 3.5;

const result = add(number1, number2);

console.log(result);
