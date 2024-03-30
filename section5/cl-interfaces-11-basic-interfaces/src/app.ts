interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const user1: Greetable = new Person("Son MinSeock", 25);

user1.greet("Hello");
