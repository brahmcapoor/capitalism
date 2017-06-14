import React, { Component } from 'react';
import { Form, Text } from 'react-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';

const style = {
  height: 300,
  width: 500,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  margin: 'auto',
};

class CapitalismSetup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numPlayers: 0,
      name: '',
      numError: '',
      nameError: '',
    };
  }

  handleNameChange = (event) => {

    this.setState({
      name: event.target.value
    });

  }

  handleNumPlayersChange = (event) => {
    this.setState({
      numPlayers: event.target.value
    });
  }

  startGame = () => {
    let newName = this.state.name;
    let newNum = parseInt(this.state.numPlayers);
    let valid = true;

    if(newName == "") {
      this.setState({nameError: "Name cannot be blank"});
      valid = false;
    } else {
        this.setState({nameError: ""});
    }

    if(!newNum || newNum <= 1) {
      this.setState({numError: "Must be a number greater than 1"});
      valid = false;
    } else {
      this.setState({numError: ""});
    }
    
    if(valid) {
      console.log(this.state);
    }
  }

  render() {

    return (

      <Paper style={style} zDepth={3}>
        <br />
        <br />

        <div>
          <TextField
            hintText="Number of Players"
            errorText={this.state.numError}
            onChange={this.handleNumPlayersChange}
          />
        </div>

        <div>
          <TextField
            hintText="Dealer's name"
            errorText={this.state.nameError}
            onChange={this.handleNameChange}
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <RaisedButton
          label="Start Game"
          primary={true}
          onTouchTap={this.startGame}
        />
      </Paper>
    );

  }
}


export default CapitalismSetup;
