function add(number1: number, number2: number, showResult: boolean, phrase: string) {
  // if (typeof number1 !== "number" || typeof number2 !== "number") {
  //   throw new Error("Incorrect input");
  // }

  const result = number1 + number2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// let number1: number = 4;
let number1: number;

number1 = 4;

const number2 = 3.5;
const printResult = true;
let resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
