function combine(input1: number | string, input2: number | string, resultConversion: "as-number" | "as-text") {
  let result;

  if ((typeof input1 === "number" && typeof input2 === "number") || resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAge = combine(10, 20, "as-number");
console.log(combinedAge);

const combinedStringAges = combine("15", "10", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Jane", "as-text");
console.log(combinedNames);
