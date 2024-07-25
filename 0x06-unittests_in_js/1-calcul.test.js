#!/usr/bin/node
const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', function(){
    describe('SUM operation', function(){

        it('Positive Numbers: int and int', function(){
            const result = calculateNumber('SUM', 1, 3);
            assert.equal(result, 4)
        })
        
        it('Positive Numbers: int and float, in order', function(){
            const result = calculateNumber('SUM', 1, 3.14);
            assert.equal(result, 4)
        })
        
        it('Positive Numbers: flaot and int, in order', function(){
            const result = calculateNumber('SUM', 1.67, 3);
            assert.equal(result, 5)
        })
        
        it('Positive Numbers: flaot and float', function(){
            const result = calculateNumber('SUM', 1.45, 3.14);
            assert.equal(result, 4)
        })
        
        it('Positive Numbers: flaot and float', function(){
            const result = calculateNumber('SUM', 1.578, 3.678);
            assert.equal(result, 6)
        })
        
        it('Positive Numbers: flaot and float', function(){
            const result = calculateNumber('SUM', 0.4, 0.6);
            assert.equal(result, 1)
        })
    
        it('Negative Numbers: int and int', function(){
            const result = calculateNumber('SUM', -1, -3);
            assert.equal(result, -4)
        })
        
        it('Negative Numbers: int and float, in order', function(){
            const result = calculateNumber('SUM', 1, -3.14);
            assert.equal(result, -2)
        })
        
        it('Negative Numbers: flaot and int, in order', function(){
            const result = calculateNumber('SUM', -1.67, 3);
            assert.equal(result, 1)
        })
        
        it('Negative Numbers: flaot and float', function(){
            const result = calculateNumber('SUM', -1.45, -3.14);
            assert.equal(result, -4)
        })
        
        it('Negative Numbers: flaot and float', function(){
            const result = calculateNumber('SUM', -1.578, -3.678);
            assert.equal(result, -6)
        })
        
        it('Negative Numbers: flaot and float', function(){
            const result = calculateNumber('SUM', 0.4, -0.6);
            assert.equal(result, -1)
        })

    })
    
    describe('SUBTRACT operation', function(){

        it('Positive Numbers: int and int', function(){
            const result = calculateNumber('SUBTRACT', 1, 3);
            assert.equal(result, -2)
        })
        
        it('Positive Numbers: int and float, in order', function(){
            const result = calculateNumber('SUBTRACT', 1, 3.14);
            assert.equal(result, -2)
        })
        
        it('Positive Numbers: flaot and int, in order', function(){
            const result = calculateNumber('SUBTRACT', 1.67, 3);
            assert.equal(result, -1)
        })
        
        it('Positive Numbers: flaot and float', function(){
            const result = calculateNumber('SUBTRACT', 1.45, 3.14);
            assert.equal(result, -2)
        })
        
        it('Positive Numbers: flaot and float', function(){
            const result = calculateNumber('SUBTRACT', 1.578, 3.678);
            assert.equal(result, -2)
        })
        
        it('Positive Numbers: flaot and float', function(){
            const result = calculateNumber('SUBTRACT', 0.4, 0.6);
            assert.equal(result, -1)
        })
    
        it('Negative Numbers: int and int', function(){
            const result = calculateNumber('SUBTRACT', -1, -3);
            assert.equal(result, 2)
        })
        
        it('Negative Numbers: int and float, in order', function(){
            const result = calculateNumber('SUBTRACT', 1, -3.14);
            assert.equal(result, 4)
        })
        
        it('Negative Numbers: flaot and int, in order', function(){
            const result = calculateNumber('SUBTRACT', -1.67, 3);
            assert.equal(result, -5)
        })
        
        it('Negative Numbers: flaot and float', function(){
            const result = calculateNumber('SUBTRACT', -1.45, -3.14);
            assert.equal(result, 2)
        })
        
        it('Negative Numbers: flaot and float', function(){
            const result = calculateNumber('SUBTRACT', -1.578, -3.678);
            assert.equal(result, 2)
        })
        
        it('Negative Numbers: flaot and float', function(){
            const result = calculateNumber('SUBTRACT', 0.4, -0.6);
            assert.equal(result, 1)
        })

    })
    
    describe('DIVIDE operation', function(){

        it('Positive Numbers: int and int', function(){
            const result = calculateNumber('DIVIDE', 1, 3);
            assert.equal(result, 0.3333333333333333)
        })

        it('Positive Numbers: int and 0', function(){
            const result = calculateNumber('DIVIDE', 1, 0);
            assert.equal(result, 'Error')
        })

        it('Positive Numbers: 0 and int', function(){
            const result = calculateNumber('DIVIDE', 0, 1);
            assert.equal(result, 0)
        })
        
        it('Positive Numbers: int and float, in order', function(){
            const result = calculateNumber('DIVIDE', 1, 3.14);
            assert.equal(result, 0.3333333333333333)
        })
        
        it('Positive Numbers: flaot and int, in order', function(){
            const result = calculateNumber('DIVIDE', 1.67, 3);
            assert.equal(result, 0.6666666666666666)
        })
        
        it('Positive Numbers: flaot and float', function(){
            const result = calculateNumber('DIVIDE', 1.45, 3.14);
            assert.equal(result, 0.3333333333333333)
        })
        
        it('Positive Numbers: flaot and float', function(){
            const result = calculateNumber('DIVIDE', 1.578, 3.678);
            assert.equal(result, 0.5)
        })
        
        it('Positive Numbers: flaot and float', function(){
            const result = calculateNumber('DIVIDE', 0.4, 0.6);
            assert.equal(result, 0)
        })
    
        it('Negative Numbers: int and int', function(){
            const result = calculateNumber('DIVIDE', -1, -3);
            assert.equal(result, 0.3333333333333333)
        })
        
        it('Negative Numbers: int and float, in order', function(){
            const result = calculateNumber('DIVIDE', 1, -3.14);
            assert.equal(result, -0.3333333333333333)
        })
        
        it('Negative Numbers: flaot and int, in order', function(){
            const result = calculateNumber('DIVIDE', -1.67, 3);
            assert.equal(result, -0.6666666666666666)
        })
        
        it('Negative Numbers: flaot and float', function(){
            const result = calculateNumber('DIVIDE', -1.45, -3.14);
            assert.equal(result, 0.3333333333333333)
        })
        
        it('Negative Numbers: flaot and float', function(){
            const result = calculateNumber('DIVIDE', -1.578, -3.678);
            assert.equal(result, 0.5)
        })
        
        it('Negative Numbers: flaot and float', function(){
            const result = calculateNumber('DIVIDE', 0.4, -0.6);
            assert.equal(result, 0)
        })

    })


    
    
})