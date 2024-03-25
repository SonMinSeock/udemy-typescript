class Department {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    describe(this: Department) {
        console.log(`Department: ${this.name}`);
    }
}

const accounting = new Department("Accounting");
const accountingCopy = { name: "DUMMY", describe: accounting.describe };

accounting.describe();
accountingCopy.describe();