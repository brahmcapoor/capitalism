import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';

const style = {
  height: 300,
  width: 500,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
  margin: 'auto',
};

const buttonStyle = {
  float: 'right',
}

class CapitalismSetup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numPlayers: 0,
      name: '',
      code: '',
      numError: '',
      nameError: '',
      codeError: '',
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

  handleCodeChange = (event) => {
    this.setState({
      code: event.target.value
    })
  }

  startGame = () => {
    let newName = this.state.name;
    let newNum = parseInt(this.state.numPlayers);
    let newCode = this.state.code;
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

    if(newCode == "") {
      this.setState({codeError: "Game code cannot be blank"});
      valid = false;
    } else {
      //TODO: preexisting game code
      this.setState({codeError: ""});
    }

    if(valid) {
      console.log(this.state);
    }
  }

  render() {

    return (

      <Paper style={style} zDepth={5}>
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

        <div>
          <TextField
            hintText="Game code"
            errorText={this.state.codeError}
            onChange={this.handleCodeChange}
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
          style={buttonStyle}
        />
      </Paper>
    );

  }
}


export default CapitalismSetup;
