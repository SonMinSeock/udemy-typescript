function Logger(logStr: string) {
  return function (constructor: Function) {
    console.log(logStr);
    console.log(constructor);
  };
}

@Logger("Logging - Person")
class Person {
  name = "Son";
  constructor() {
    console.log("Creating Person...");
  }
}
const user = new Person();
