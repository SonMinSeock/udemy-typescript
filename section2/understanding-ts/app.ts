// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Son MinSeock",
//   age: 26,
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Son MinSeock",
//   age: 26,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [ 3, 'author', 10];

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Son MinSeock",
  age: 26,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR,
};

let favoriteActivities: string[];

favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
