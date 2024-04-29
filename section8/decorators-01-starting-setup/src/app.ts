// function Log(target: any, propertyName: string | Symbol) {
//   console.log("프로퍼티 데코레이터!");
//   console.log(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: TypedPropertyDescriptor<number>) {
//   console.log("접근자 데코레이터!");
//   console.log(target, name, descriptor);
// }

// function Log3(target: any, name: string | Symbol, descriptor: TypedPropertyDescriptor<(tax: number) => number>) {
//   console.log("메서드 데코레이터!");
//   console.log(target, name, descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("매개변수 데코레이터!");
//   console.log(target, name, position);
// }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price - should be positive!");
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }

function Logger(logStr: string) {
  return function (constructor: Function) {
    console.log(logStr);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);

        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Son";
  constructor() {
    console.log("Creating Person...");
  }
}
const user = new Person();

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
class Printer {
  message = "This works";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button") as HTMLButtonElement;

button.addEventListener("click", p.showMessage);

interface ValidatorConfig {
  /* Course : {
    title: ['required'] or price: ['positive']
  }
  */
  [property: string]: {
    [validateProperty: string]: string[]; // ['required', 'positive']
  };
}

const registersValidators: ValidatorConfig = {};

function TitleRequired(target: any, propertyName: string) {
  registersValidators[target.constructor.name] = {
    ...registersValidators[target.constructor.name],
    [propertyName]: [...(registersValidators[target.constructor.name]?.[propertyName] ?? []), "required"],
  };
}

function PositiveNumber(target: any, propertyName: string) {
  registersValidators[target.constructor.name] = {
    ...registersValidators[target.constructor.name],
    [propertyName]: [...(registersValidators[target.constructor.name]?.[propertyName] ?? []), "positive"],
  };
}

function validate(obj: any): any {
  const objValidatorConfig = registersValidators[obj.constructor.name];

  if (!objValidatorConfig) {
    return true;
  }

  let isValid = true;

  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @TitleRequired
  title: string;
  @PositiveNumber
  price: number;
  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }
  console.log(createdCourse);
});
