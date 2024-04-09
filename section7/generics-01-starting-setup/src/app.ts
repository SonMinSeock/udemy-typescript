function merge<T extends {}, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergeObj1 = merge<{ name: string; hobbies?: string[] }, { age: number }>(
  { name: "손민석", hobbies: ["스케이트보드 타기", "락밴드 음악 듣기"] },
  { age: 25 }
);
const mergeObj2 = merge<{ name: string; hobbies?: string[] }, { age: number }>({ name: "전민서" }, { age: 22 });
console.log(mergeObj1.name, mergeObj1.age, mergeObj1.hobbies);
console.log(mergeObj2.name, mergeObj2.age);
