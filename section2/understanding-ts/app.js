function add(number1, number2, showResult, phrase) {
    // if (typeof number1 !== "number" || typeof number2 !== "number") {
    //   throw new Error("Incorrect input");
    // }
    if (showResult) {
        console.log(phrase + number1 + number2);
    }
    else {
        return number1 + number2;
    }
}
var number1 = 4;
var number2 = 3.5;
var printResult = true;
var resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
