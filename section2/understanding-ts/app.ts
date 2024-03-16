function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result : " + num);
}

function addAndHandler(n1: number, n2: number, cb: (result: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(20, 30));

addAndHandler(10, 30, (result) => console.log(result));

// let combineValues: (a: number, b: number) => number;
// combineValues = add;

// combineValues = printResult;

// console.log(combineValues(2, 10));
