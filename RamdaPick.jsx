import React from 'react';
import Inputs from './Inputs.jsx'
import Output from './Output.jsx'
import Suggestions from './Suggestions.jsx'

const RamdaPick = React.createClass({
  setInputs(e) {
    this.setState({ inputs: e.target.value })
  },
  setOutput(e) {
    this.setState({ output: e.target.value })
  },
  getInitialState: function() {
    return {
      inputs: [2, 7],
      output: 9
    }
  },
  render: function() {
    return (
      <div>
        <Inputs onChange={this.setInputs}/>
        <Output onChange={this.setOutput}/>
        <Suggestions inputs={this.state.inputs} output={this.state.output}/>
      </div>
    )}
  })

  export default RamdaPick
