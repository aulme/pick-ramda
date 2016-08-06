import React from 'react';
import TextField from 'material-ui/TextField'

import pick from './pick'
import R from 'ramda'

window.R = R
window.pick = pick

const Output = ({inputs, output}) => {
  const result = pick(R, inputs, output).map(fn => `R.${fn}`).join('\n')

  return (<TextField
    multiLine={true}
    disabled={true}
    id="suggestions"
    value={result}
    />)
  }

  export default Output;
