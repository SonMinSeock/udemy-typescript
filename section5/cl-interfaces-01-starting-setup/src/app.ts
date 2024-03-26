class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = [];
    constructor(private id: string, public name: string) {
        
    }
    describe(this: Department) {
        console.log(`Department(${this.id}): ${this.name}`);
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


const accounting = new Department("d1", "Accounting");
accounting.describe();

accounting.addEmployee('Son');
accounting.addEmployee('Max');

// accounting.employees[1] = 'Jane';

accounting.printEmployeeInformation();


// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
