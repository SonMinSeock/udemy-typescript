function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result : " + num);
}
function addAndHandler(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(20, 30));
addAndHandler(10, 30, function (result) { return console.log(result); });
// let combineValues: (a: number, b: number) => number;
// combineValues = add;
// combineValues = printResult;
// console.log(combineValues(2, 10));
