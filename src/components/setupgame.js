import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { createNewGame } from '../actions'


const buttonStyle = {
  float: 'right',
  marginLeft: 20,
}

class CapitalismSetup extends Component {

  createHandlers = function(dispatch) {

    let handleNameChange = (event) => {
      this.setState({
        name: event.target.value
      });

    }

    let handleNumPlayersChange = (event) => {
      this.setState({
        numPlayers: event.target.value
      });
    }

    let handleCodeChange = (event) => {
      this.setState({
        code: event.target.value
      })
    }

    let handleStartGame = () => {

      let newName = this.state.name;
      let newNum = parseInt(this.state.numPlayers, 10);
      let newCode = this.state.code;
      let valid = true;

      if(newName === "") {
        this.setState({nameError: "Name cannot be blank"});
        valid = false;
      } else {
          this.setState({nameError: ""});
      }

      if(!newNum || newNum < 4) {
        this.setState({numError: "Must be a number greater than or equal to 4"});
        valid = false;
      } else {
        this.setState({numError: ""});
      }

      if(newCode === "") {
        this.setState({codeError: "Game code cannot be blank"});
        valid = false;
      } else {
        //TODO: preexisting game code
        this.setState({codeError: ""});
      }

      if(valid) {
        dispatch(createNewGame(newNum, newName, newCode));
        this.props.handler('starting');
      }
    }

    return {
      handleNameChange,
      handleNumPlayersChange,
      handleCodeChange,
      handleStartGame,
    }

  }

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
    this.handlers = this.createHandlers(props.dispatch);
  }

  render() {

    return (

      <div>

        <div>
          <TextField
            hintText="Number of Players"
            errorText={this.state.numError}
            onChange={this.handlers.handleNumPlayersChange}
          />
        </div>

        <div>
          <TextField
            hintText="Dealer's name"
            errorText={this.state.nameError}
            onChange={this.handlers.handleNameChange}
          />
        </div>

        <div>
          <TextField
            hintText="Game code"
            errorText={this.state.codeError}
            onChange={this.handlers.handleCodeChange}
          />
        </div>

        <br />

        <RaisedButton
          label="Start Game"
          primary={true}
          onTouchTap={this.handlers.handleStartGame}
          style={buttonStyle}
        />
      </div>
    );

  }
}


export default connect()(CapitalismSetup);
