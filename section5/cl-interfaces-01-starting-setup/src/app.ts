class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}
  describe(this: Department) {
    console.log(`Department(${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    // this.id = 'd11';
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  public admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found");
  }

  set mostRecentReport(value) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }

    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string): void {
    if (name === "Son") {
      return;
    }

    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReport() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Son"]);
it.describe();

it.addEmployee("Son");
it.addEmployee("Max");

it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.addReport("Something went wrong!");
console.log(accounting.mostRecentReport);

accounting.printReport();
accounting.mostRecentReport = "test";
accounting.printReport();
