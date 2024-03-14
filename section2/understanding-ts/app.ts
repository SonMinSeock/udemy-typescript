// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Son MinSeock",
//   age: 26,
// };

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Son MinSeock",
  age: 26,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [ 3, 'author', 10];

let favoriteActivities: string[];

favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
