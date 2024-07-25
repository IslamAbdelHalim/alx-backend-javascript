const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment')
const { expect } = require('chai')
const sinon = require('sinon')

describe('sendPaymentRequestToApi', function(){
    it('spy calculateNumber method', function(){
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber')
        sendPaymentRequestToApi(100, 20)
    
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true
    })
})
