function add(number1, number2, showResult, phrase) {
    // if (typeof number1 !== "number" || typeof number2 !== "number") {
    //   throw new Error("Incorrect input");
    // }
    var result = number1 + number2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 4;
var number2 = 3.5;
var printResult = true;
var resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
