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
//expect(1+1).to.equal(2)

// var randomNumber = 8

 
//   describe('A test for math.floor', function(){
 
//     it('Should equal 0', function (done) {
 
//      expect(math.floor(randomNumber) === 0).to.equal(true);
 
//     });
//   });

// const number = Math.floor(Math.random() * 10) 

// describe('number', () => {
//     it('should return a random number less than 10')
//     equal(number).to.be.a('number');
//   });


// describe('number', function () {
//   const test = [1,2,3,4,5,6,7,8,9]

//   it('always gives a random number', () => {
//     expect(getRandomNumber(test)).toBeDefined()
//   })
// })

// describe('number', () => {
//       expect(x).to.be.a('number');
//     });
 