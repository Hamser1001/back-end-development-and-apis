const assert = require("node:assert/strict")
const { isPrime } = require("./index")

assert.strictEqual(isPrime(2), true);
assert.strictEqual(isPrime(3), true);
assert.strictEqual(isPrime(8), false);
assert.strictEqual(isPrime(15), false);
assert.strictEqual(isPrime(1), false);
assert.strictEqual(isPrime(0), false);
assert.strictEqual(isPrime(-5), false);