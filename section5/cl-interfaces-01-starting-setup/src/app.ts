class Department {
    name: string;
    private employees: string[] = [];
    constructor(name: string) {
        this.name = name;
    }
    describe(this: Department) {
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


const accounting = new Department("Accounting");
accounting.describe();

accounting.addEmployee('Son');
accounting.addEmployee('Max');

// accounting.employees[1] = 'Jane';

accounting.printEmployeeInformation();


// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
