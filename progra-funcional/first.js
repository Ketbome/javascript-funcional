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

function testPrimos() {
  assert(esPrimo(9) === false, "No es primo");
  assert(esPrimo(10) === false, "No es primo");
  assert(esPrimo(17) === true, "Es primo");
  assert(esPrimo(39) === false, "Es primo");
  assert(esPrimo(90) === false, "No es primo");

  console.log("All tests pass");
}

testPrimos();
