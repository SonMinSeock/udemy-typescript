// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Son MinSeock",
//   age: 26,
// };

const person = {
  name: "Son MinSeock",
  age: 26,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];

favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
