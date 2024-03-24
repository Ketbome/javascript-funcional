const assert = require("assert");

function first() {
  return 1;
}

function test() {
  assert(first() === 2, "No es igual");

  console.log("All tests pass");
}

function esPrimo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(esPrimo(7));
console.log(esPrimo(2));
