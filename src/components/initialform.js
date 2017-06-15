import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import CapitalismSetup from './setupgame';
import CapitalismJoinGame from './joingame';

const paperStyle = {
  height: '100%',
  width: 500,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
  margin: 'auto',
};

class CapitalismStartForm extends Component {

  render() {
    return(
      <div className="Initial-Forms">
        <Paper style={paperStyle} zDepth={5}>
          <CapitalismJoinGame />
        </Paper>
        <br />
        <br />
        <Paper style={paperStyle} zDepth={5}>
          <CapitalismSetup />
        </Paper>
      </div>
    );
  }
}

export default CapitalismStartForm;
