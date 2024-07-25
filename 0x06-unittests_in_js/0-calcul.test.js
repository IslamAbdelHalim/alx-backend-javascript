const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe ('test calculate', function(){
  it('Positive Numbers: int and int', function(){
    const result = calculateNumber(1, 3);
    assert.equal(result, 4)
  })
  
  it('Positive Numbers: int and float, in order', function(){
    const result = calculateNumber(1, 3.14);
    assert.equal(result, 4)
  })
  
  it('Positive Numbers: flaot and int, in order', function(){
    const result = calculateNumber(1.67, 3);
    assert.equal(result, 5)
  })
  
  it('Positive Numbers: flaot and float', function(){
    const result = calculateNumber(1.45, 3.14);
    assert.equal(result, 4)
  })
  
  it('Positive Numbers: flaot and float', function(){
    const result = calculateNumber(1.578, 3.678);
    assert.equal(result, 6)
  })
  
  it('Positive Numbers: flaot and float', function(){
    const result = calculateNumber(0.4, 0.6);
    assert.equal(result, 1)
  })

  it('Negative Numbers: int and int', function(){
    const result = calculateNumber(-1, -3);
    assert.equal(result, -4)
  })
  
  it('Negative Numbers: int and float, in order', function(){
    const result = calculateNumber(1, -3.14);
    assert.equal(result, -2)
  })
  
  it('Negative Numbers: flaot and int, in order', function(){
    const result = calculateNumber(-1.67, 3);
    assert.equal(result, 1)
  })
  
  it('Negative Numbers: flaot and float', function(){
    const result = calculateNumber(-1.45, -3.14);
    assert.equal(result, -4)
  })
  
  it('Negative Numbers: flaot and float', function(){
    const result = calculateNumber(-1.578, -3.678);
    assert.equal(result, -6)
  })
  
  it('Negative Numbers: flaot and float', function(){
    const result = calculateNumber(0.4, -0.6);
    assert.equal(result, -1)
  })
});
