import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import {List, ListItem} from 'material-ui/List';
import database from '../config/database';
import dealCards from '../utils/cards';
import '../styles/App.css'

const paperStyle = {
  height: '100%',
  width: 500,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
  margin: 'auto',
};

var dbLocation;

class WaitingForPlayers extends Component {

  componentDidMount(){

    dbLocation = database.ref('games/' + this.props.gameCode);
    dbLocation.on('value', function(snapshot) {
      const nPlayersNow = snapshot.val().numPlayers;
      const nJoinedNow = Object.keys(snapshot.val().players).length;
      this.setState({
        nPlayers: nPlayersNow,
        nJoined: nJoinedNow,
        players: Object.keys(snapshot.val().players),
      });

      if(nPlayersNow === nJoinedNow) {
        dbLocation.off('value');

        if(this.props.isDealer === 1) {
          let hands = dealCards(this.state.nPlayers);
          console.log(hands);

          for(let i = 0; i < this.state.players.length; i++) {
            let hand = hands[i];
            let player = this.state.players[i];
            database.ref().child('games/' + this.props.gameCode + '/players/' + player).update({
              hand: hand,
            });
          }
        }

        this.props.handler('started');
      }
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


    return (

      <div className="Initial-Forms">
        <Paper style={paperStyle} zDepth={5}>
          <LinearProgress mode="determinate" min={0} max={this.state.nPlayers} value={this.state.nJoined} />
          <h1> Players who've joined </h1>
          <List>
            {this.state.players.map(function(playerName) {
              return <ListItem key ={playerName} primaryText={playerName} className="List-item"/>
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
