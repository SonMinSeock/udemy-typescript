const userName = "Son MinSeock";
// userName = 'Son';

// let age = 25;

// function add(a: number, b: number) {
//   let result = a + b;
//   return result;
// }

// console.log(result);

// if (age > 20) {
//   var isOld = true;
// }

// console.log(isOld);
const add = (a: number, b: number = 1) => {
  return a + b;
};

// const printOutPut = (outPut: string | number) => console.log(outPut);
const printOutPut: (outPut: string | number) => void = (outPut) => console.log(outPut);

const button = document.querySelector("button")!;

if (button) {
  button.addEventListener("click", () => console.log("Click!"));
}

printOutPut(add(2, 4));

// 배열 구조 분해
// 1. 첫 번째 방법.
/*
const hobbies = ["Sports", "Cooking"];

const activeHobbies = ["Hiking"];

// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);
console.log(activeHobbies);
*/

// 2. 두 번째 방법.

const hobbies = ["Sports", "Cooking", "Coding"];

const activeHobbies = ["Hiking", ...hobbies];

console.log(activeHobbies);

// 객체 구조 분해
const person = {
  firstName: "Son",
  age: 25,
  cardInfo: {
    createdAt: 2323124,
  },
};

const copiedPerson = {
  ...person,
  job: "FrontEnd Devloper",
};

console.log(copiedPerson);

// 나머지 매개변수
const restAdd = (...numbers: number[]) => {
  // 누적 계산
  return numbers.reduce((preValue, curValue) => {
    return preValue + curValue;
  }, 0);
};

const addNumbers = restAdd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(addNumbers);

const [hobbie1, hobbie2, ...remainingHobbies] = hobbies;

console.log(hobbie1, hobbie2, remainingHobbies);

const {
  firstName: nickName,
  age,
  cardInfo: { createdAt },
} = person;

console.log(nickName, age, createdAt);
