// import React from 'react'
// import { shallow } from 'enzyme'
// //import { getRandomNumber } from './algorithm';

// const number = Math.floor(Math.random() * 100) 


// describe('Number', () => {
//   const test = [1,2,3,4,5,6,7,8,9]

//   it('always gives a random number', () => {
//     expect(getRandomNumber(test)).toBeDefined()
//   })

 
// })

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});