function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") || resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAge = combine(10, 20, "as-number");
console.log(combinedAge);
var combinedStringAges = combine("15", "10", "as-number");
console.log(combinedStringAges);
var combinedNames = combine("Max", "Jane", "as-text");
console.log(combinedNames);
