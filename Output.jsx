const R = require('ramda')
import React from 'react'
import TextField from 'material-ui/TextField'
const parseValue = require('./parseValue')

const parse = R.evolve({
  target: {
    value: parseValue
  }
})

const Output = ({onChange}) => {
    return (<TextField
      floatingLabelText="Output"
      floatingLabelFixed={true}
      hintText="9"
      id="output"
      onChange={e => onChange(parse(e))}
    />)
}

export default Output;
