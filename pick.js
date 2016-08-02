"use strict"
const R = require('ramda')

const isMatch = (fn, input, out) => {
    try {
      return fn(...input) === out
    }
    catch (e) {
      return false
    }
}

const pick = (lib, input, out) => {
  const fns = Object.keys(lib).filter(key => typeof(lib[key]) === 'function')

  return fns.filter(key => {
    return isMatch(lib[key], input, out) || isMatch(lib[key], R.reverse(input), out)
  })
}

module.exports = pick
