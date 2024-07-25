function calculateNumber(type, a, b) {
  operation = {
    SUM: (a,b) => Math.round(a) + Math.round(b),
    SUBTRACT: (a,b) => Math.round(a) - Math.round(b),
    DIVIDE: (a,b) => {
      if (Math.round(b) == 0)
        return 'Error';
      else
      return Math.round(a) / Math.round(b)
    }
  }

  return operation[type](a, b);
}

console.log(calculateNumber('SUM', 1.4, 4.5))
console.log(calculateNumber('SUBTRACT', 1.4, 4.5))
console.log(calculateNumber('DIVIDE', 1.4, 4.5))
console.log(calculateNumber('DIVIDE', 1.4, 0))

module.exports = calculateNumber;