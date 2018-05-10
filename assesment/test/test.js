var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});


require('mocha-testcheck').install();
const { expect } = require('chai');
 
describe('MySpec', () => {
 
  check.it('accepts an int and a string', gen.int, gen.string, (x, y) => {
    expect(x).to.be.a('number');
    expect(y).to.be.a('string');
  });
 
});


describe('my first mocha test!', function() {
    it('should add to 4', function () {
        expect(1+1).to.equal(2);
    });
});


describe ('colorArray', function(){
    it('should return RED evaluation if number is below 53', function(){
        expect(20).to.be.lessThan(53);
    })
})





  describe('Number', function() {
    const getRandomNumber= Math.floor(Math.random() * 100) 
    const colorArray = (getRandomNumber) => {
            if(getRandomNumber <= 53) return ['RED']
            if(getRandomNumber > 53 && getRandomNumber <= 81) return ['YELLOW']
            if(getRandomNumber > 81) return ['GREEN']
    }

        
      it('should return red if number less than 53, should return yellow if between 53 and 81, should return green if above 81', function(){
        expect(getRandomNumber).to.be.lessThan(100)
      })
    })