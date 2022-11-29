const add = (a, b) => {
  return a + b;
};

const divide = (a, b) => {
  if (b === 0) throw new Error('division by 0')
  return a / b
}

module.exports = {
  add,
  divide
};
