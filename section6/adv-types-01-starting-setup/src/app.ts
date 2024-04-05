type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "손민석",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name : ", emp.name);
  if ("privileges" in emp) {
    console.log("Privileges : ", emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date : ", emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Drivng a car...");
  }
}

interface Truck {
  drive: () => void;
  loadCargo: (amount: number) => void;
}

// class Truck {
//   drive() {
//     console.log("Drivng a truck...");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading cargo... " + amount);
//   }
// }

type Vehicle = Car | Truck;

const v1 = new Car();
const v2: Truck = {
  drive() {
    console.log("Drivng a truck...");
  },
  loadCargo(amount) {
    console.log("Loading cargo... " + amount);
  },
};

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(10000);
  }
}

useVehicle(v1);
useVehicle(v2);
