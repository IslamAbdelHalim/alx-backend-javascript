const Utils = {
  calculateNumber: (type, a, b) => {
      operation = {
          SUM: (a, b) => Math.round(a) + Math.round(b),

          SUBTRACT: (a, b) => Math.round(a) - Math.round(b),

          DIVIDE: function (a, b){
              if (Math.round(b) === 0){
                  return 'Error'
              }
              return Math.round(a) / Math.round(b)
          }
      }
      return operation[type](a,b)
  }
}
module.exports = Utils
