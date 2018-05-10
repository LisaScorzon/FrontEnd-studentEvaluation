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


// export const colorArray = (number) => {
//     if(number <= 53) return ['RED']
//     if(number > 53 && number <= 81) return ['YELLOW']
//     if(number > 81) return ['GREEN']
  
//     console.log (colorArray(number));
//   }