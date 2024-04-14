class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("안녕하세요");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(23);
numberStorage.addItem(20);
numberStorage.removeItem(23);
console.log(numberStorage.getItems());

// const objectStorage = new DataStorage<object>();
// const user1 = { name: "Son" };
// const user2 = { name: "Kim" };

// objectStorage.addItem(user1);
// objectStorage.addItem(user2);
// objectStorage.removeItem(user1);
// console.log(objectStorage.getItems());
