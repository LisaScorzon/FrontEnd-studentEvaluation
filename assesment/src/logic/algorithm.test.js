import React from 'react'
import { shallow } from 'enzyme'
import { getRandomNumber } from './algorithm';




describe('getRandomNumber', () => {
  const test = [1,2,3,4,5,6,7,8,9]

  it('always gives a random number', () => {
    expect(getRandomNumber(test)).toBeDefined()
  })

 
})
