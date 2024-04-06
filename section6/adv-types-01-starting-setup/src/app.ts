interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log(`Moving with speed: ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
moveAnimal({ type: "horse", runningSpeed: 100 });

//const userNameInput = <HTMLInputElement>document.getElementById("username")!;
const userNameInput = document.getElementById("username");

if (userNameInput) {
  (userNameInput as HTMLInputElement).value = "Son";
}

interface ErrorContainer {
  // { email: "Not a valid email", username: "Must...." }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};

type Combinable = string | number;
type Numeric = number | boolean;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result1 = add(1, 3);
const result2 = add("Hello ", "Son");

const fetchedUserData = {
  id: "u1",
  name: "Son",
  job: {
    title: "CEO",
    descritpion: "Hi CEO",
  },
};

console.log(fetchedUserData?.job?.descritpion);

const userInput = null;
const storedData = userInput ?? "DEFAULT";

console.log(storedData);
