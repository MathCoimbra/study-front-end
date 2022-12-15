let inputStr = "[)";
console.log(isValid(inputStr));

function isValid(str) {
  return str.includes("()") || str.includes("[]") || str.includes("{}")
}
