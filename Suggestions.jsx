import React from 'react';
import TextField from 'material-ui/TextField'

import pick from './pick'
import R from 'ramda'

window.R = R
window.pick = pick

const Output = ({inputs, output}) => {
  const ramdaWithoutUnfold = R.dissoc('unfold', R);
  const result = pick(ramdaWithoutUnfold, inputs, output).map(fn => `R.${fn}`).join('\n')

  return (<TextField
    style={{marginTop: '30px'}}
    floatingLabelText="Functions you could use"
    floatingLabelFixed={true}
    multiLine={true}
    disabled={true}
    id="suggestions"
    value={result}
    />)
  }

  export default Output;
