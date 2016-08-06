import React from 'react';
import TextField from 'material-ui/TextField'

const parseValue = require('./parseValue')
const R = require('ramda')

const parse = R.evolve({
  target: {
    value: val => parseValue(`[${val}]`)
  }
})

const Inputs = ({onChange}) => {
  return (
    <TextField
      floatingLabelText="Inputs, spearated by comma"
      floatingLabelFixed={true}
      hintText="2, 7"
      id="input"
      onChange={e => onChange(parse(e))}
    />)
}

export default Inputs;
