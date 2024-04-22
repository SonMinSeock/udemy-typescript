function Logger(logStr: string) {
  console.log("Logger 팩토리 실행...");
  return function (constructor: Function) {
    console.log("Logger 데코레이터 실행...");
    console.log(logStr);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("WithTemplate 팩토리 실행...");
  return function (constructor: any) {
    console.log("WithTemplate 데코레이터 실행...");
    const hookEl = document.getElementById(hookId);
    const user = new constructor();

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = user.name;
    }
  };
}

@Logger("LOGGING")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Son";
  constructor() {
    console.log("Creating Person...");
  }
}
const user = new Person();
