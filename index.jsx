import React from 'react';
import {render} from 'react-dom';
import pick from './pick'
import R from 'ramda'

window.pick = pick
window.R = R

class App extends React.Component {
  render () {
    return (
      <div>
        <p> {pick(R, [1, 2], 3)} </p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
