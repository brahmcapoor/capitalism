import React, {Component} from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  float: 'right',
  marginLeft: 20,
}

class CapitalismJoinGame extends Component {

  createHandlers = function(dispatch) {

    let handleGameCodeChange = (event) => {
      this.setState({
        gameCode: event.target.value,
      })
    }

    let handleNameChange = (event) => {
      this.setState({
        name: event.target.value,
      })
    }

    let handleJoinGame = () => {
      console.log(this.state["name"] + " Joining game " + this.state["gameCode"]);
    }

    return {
      handleGameCodeChange,
      handleJoinGame,
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      gameCode: "",
      name: "",
      codeError: "",
      nameError: "",
    }
    this.handlers = this.createHandlers(props.dispatch);
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            hintText="Your name"
            errorText={this.state.nameError}
            onChange={this.handlers.handleNameChange}
          />
        </div>
        <div>
          <TextField
            hintText="Game Code"
            errorText={this.state.codeError}
            onChange={this.handlers.handleGameCodeChange}
          />
        </div>
        <br/>
        <RaisedButton
          label="Join game"
          secondary={true}
          onTouchTap={this.handlers.handleJoinGame}
          style={buttonStyle}
        />
      </div>
    );
  }
}

export default connect()(CapitalismJoinGame);
