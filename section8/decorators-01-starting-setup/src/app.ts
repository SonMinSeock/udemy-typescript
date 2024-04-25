function Log(target: any, propertyName: string | Symbol) {
  console.log("프로퍼티 데코레이터!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: TypedPropertyDescriptor<number>) {
  console.log("접근자 데코레이터!");
  console.log(target, name, descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: TypedPropertyDescriptor<(tax: number) => number>) {
  console.log("메서드 데코레이터!");
  console.log(target, name, descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("매개변수 데코레이터!");
  console.log(target, name, position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
