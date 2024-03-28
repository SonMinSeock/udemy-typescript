abstract class Department {
  // private id: string;
  // private name: string;
  static fiscalYear = 2024;
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {}
  static createEmployee(name: string) {
    return { name };
  }
  abstract describe(this: Department): void;

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
  describe() {
    console.log(`IT Department - ID : ${this.id}`);
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

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }

    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log(`Accounting Department - ID : ${this.id}`);
    //this.fiscalYear; // X
    //this.createEmployee(); // X
    // Department.fiscalYear; // O
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
it.addEmployee("Son");
it.addEmployee("Max");

it.describe();

const accounting = new AccountingDepartment("d2", []);
accounting.describe();
// accounting.addReport("Something went wrong!");
// console.log(accounting.mostRecentReport);

// accounting.printReport();
// accounting.mostRecentReport = "test";
// accounting.printReport();

// console.log(Department.createEmployee("Vincx"));
// console.log(Department.fiscalYear);
