import React, { Component, Text } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import {List, ListItem} from 'material-ui/List';
import database from '../config/database';

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
      this.setState({
        nPlayers: snapshot.val().numPlayers,
        nJoined: snapshot.val().players ? Object.keys(snapshot.val().players).length : 0,
        players: Object.keys(snapshot.val().players),
      });
    }.bind(this));
  }

  constructor(props) {
    super(props);

    this.state = {
      nPlayers: 0,
      nJoined: 0,
      players: [],
    };
  }

  render() {

    return (
      <div className="Initial-Forms">
        <Paper style={paperStyle} zDepth={5}>
          <List>
            {this.state.players.map(function(playerName) {
              return <ListItem key ={playerName} primaryText={playerName} />
            })}
          </List>
          <LinearProgress mode="determinate" min={0} max={this.state.nPlayers} value={this.state.nJoined} />
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameCode: state.reducers.gameCode
  };
}

export default connect(mapStateToProps)(WaitingForPlayers);
