function calculateNumber(type, a, b) {
  operation = {
    SUM: (a,b) => Math.round(a) + Math.round(b),
    SUBTRACT: (a,b) => Math.round(a) - Math.round(b),
    DIVIDE: (a,b) => {
			try {
				return Math.round(a) / Math.round(b);
			} catch {
				return 'Error'
			}
    }
  }

  return operation[type](a, b);
}

module.exports = calculateNumber;