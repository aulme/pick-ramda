"use strict"
jest.unmock('../pick')
jest.unmock('ramda')
jest.unmock('js-combinatorics')

const R = require('ramda')

describe("pick", () => {
  it("can ignore order when asked", () => {

  });

  it("finds that R.add can add 1 and 5 and get 7", () => {
    return expect(require('../pick')(R, [2, 5], 7)).toEqual(['add'])
  })

  it("finds that R.subtract can subtract 5 from 2 and get -3 when params are flipped", () => {
    return expect(require('../pick')(R, [5, 2], -3)).toEqual(['subtract'])
  })

  it("finds functions that produce object outputs", () => {
    return expect(require('../pick')(R, [{a: 5}, {b: 23}], { a: 5, b: 23 })).toEqual([ 'merge' ])
  })

  it("finds functions when arguments are badly mingled", () => {
    return expect(require('../pick')(R, [1, 100, 12, 200, 15], 300)).toEqual([ 'add' ])
  })
})
