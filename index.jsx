import React from 'react';
import {render} from 'react-dom';
import pick from './pick'

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));