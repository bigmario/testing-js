function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  const result = (b === 0 ? null : a / b);
  return result;
}

module.exports = {
  sum,
  multiply,
  divide,
};
