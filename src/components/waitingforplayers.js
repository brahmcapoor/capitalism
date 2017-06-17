import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import database from '../config/database';

const paperStyle = {
  height: '100%',
  width: 500,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
  margin: 'auto',
};

const buttonStyle = {
  float: 'right',
  marginLeft: 20,
}

var dbLocation;

class WaitingForPlayers extends Component {

  componentDidMount(){
    dbLocation = database.ref('games/' + this.props.gameCode);
    dbLocation.on('value', function(snapshot) {
      const nPlayersNow = snapshot.val().numPlayers;
      const nJoinedNow = Object.keys(snapshot.val().players).length;
      if(nPlayersNow === nJoinedNow) {
        dbLocation.off('value');
      }
      this.setState({
        nPlayers: nPlayersNow,
        nJoined: nJoinedNow,
        players: Object.keys(snapshot.val().players),
      });
    }.bind(this));
  }

  createHandlers = function(dispatch) {
    let handleStartGame = () => {
      this.props.handler('started');
    }

    return {
      handleStartGame,
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      nPlayers: 0,
      nJoined: 0,
      players: [],
      startable: false,
    };

    this.handlers = this.createHandlers();
  }

  render() {
    let startButton = null;
    if(this.state.startable && this.props.isDealer === 1) {
      startButton = <RaisedButton
                      label = "Start game"
                      primary = {true}
                      onTouchTap = {this.handlers.handleStartGame}
                      style = {buttonStyle}
                    />
    }

    return (
      <div className="Initial-Forms">
        <Paper style={paperStyle} zDepth={5}>
          <LinearProgress mode="determinate" min={0} max={this.state.nPlayers} value={this.state.nJoined} />
          <List>
            {this.state.players.map(function(playerName) {
              return <ListItem key ={playerName} primaryText={playerName} />
            })}
            {startButton}
          </List>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameCode: state.reducers.gameCode,
    isDealer: state.reducers.isDealer
  };
}

export default connect(mapStateToProps)(WaitingForPlayers);
