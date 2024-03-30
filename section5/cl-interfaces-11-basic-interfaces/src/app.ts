// type AddFn = (n1: number, n2: number) => number

// let add:AddFn;

// add = (n1, n2) => {
//   return n1 + n2;
// }

interface AddFn {
  (n1: number, n2: number): number;
}

let add: AddFn = (n1, n2) => n1 + n2;

console.log(add(10, 12));

interface Named {
  readonly name?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// type Another = {
//   readonly name: string;
// }

class Person implements Greetable {
  name?: string;
  age: number = 25;
  constructor(name?: string) {
    if (this.name) {
      this.name = name;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log(`Hi~`);
    }
  }
}

const user1: Greetable = new Person();

user1.greet("Hello");
//user1.name = "Lane";
