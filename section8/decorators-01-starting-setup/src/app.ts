function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Son";
  constructor() {
    console.log("Creating Person...");
  }
}
const user = new Person();
