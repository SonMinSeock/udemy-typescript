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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Son MinSeock",
    age: 26,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR,
};
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
