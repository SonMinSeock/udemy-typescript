let userInput: unknown;
let userName: string;

userInput = 10;
userInput = "son";

if (typeof userInput === "string") {
  userName = userInput;
}

function generatorError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generatorError("An error occurred!", 500);
