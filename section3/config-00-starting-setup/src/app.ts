let appId = 23;
const button = document.querySelector("button")!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  let username = "son";

  console.log("Click! " + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're Welecome"));
}
