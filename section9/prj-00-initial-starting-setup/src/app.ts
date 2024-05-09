// 내가 작성한 코드.
/*
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  constructor() {
    //this.templateElement = <HTMLTemplateElement>document.getElementById("project-input")!;
    this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.element = this.templateElement.content.firstElementChild as HTMLFormElement;
    this.attach();
  }
  private attach() {
    this.hostElement.appendChild(this.element);
  }
}
*/

// 강의에서 작성한 코드이다.

// Validation 인터페이스.
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

// 입력에 대한 검증 함수.
function validate(validatable: Validatable) {
  let isValid = true;

  if (validatable.required) {
    isValid = isValid && validatable.value.toString().trim().length !== 0;
  }

  if (validatable.minLength !== undefined && typeof validatable.value === "string") {
    isValid = isValid && validatable.value.length >= validatable.minLength;
  }

  if (validatable.maxLength !== undefined && typeof validatable.value === "string") {
    isValid = isValid && validatable.value.length <= validatable.maxLength;
  }

  if (validatable.min !== undefined && typeof validatable.value === "number") {
    isValid = isValid && validatable.value >= validatable.min;
  }

  if (validatable.max !== undefined && typeof validatable.value === "number") {
    isValid = isValid && validatable.value <= validatable.max;
  }

  return isValid;
}

// AutoBind 데코레이터.
function AutoBind(_1: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const bindFn = originalMethod.bind(this);
      return bindFn;
    },
  };

  return adjDescriptor;
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;

    this.titleInputElement = this.element.querySelector("#title") as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector("#description") as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector("#people") as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private clearUserInput() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };

    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };

    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)) {
      alert("Invalid input, please try again!");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  @AutoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      console.log(title, description, people);
      this.clearUserInput();
    }
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const projectInput = new ProjectInput();
