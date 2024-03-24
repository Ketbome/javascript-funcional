const assert = require("assert");

function first() {
  return 1;
}

function test() {
  assert(first() === 2);

  console.log("All tests pass");
}

test();
