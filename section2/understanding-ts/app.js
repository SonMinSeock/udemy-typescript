var userInput;
var userName;
userInput = 10;
userInput = "son";
if (typeof userInput === "string") {
    userName = userInput;
}
function generatorError(message, code) {
    throw { message: message, errorCode: code };
}
generatorError("An error occurred!", 500);
