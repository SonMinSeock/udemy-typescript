function add(number1: number, number2: number, showResult: boolean, phrase: string) {
  // if (typeof number1 !== "number" || typeof number2 !== "number") {
  //   throw new Error("Incorrect input");
  // }

  if (showResult) {
    console.log(phrase + number1 + number2);
  } else {
    return number1 + number2;
  }
}

const number1 = 4;
const number2 = 3.5;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
