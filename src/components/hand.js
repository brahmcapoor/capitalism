import React, { Component } from 'react';
import { connect } from 'react-redux';
import database from '../config/database';
import Paper from 'material-ui/Paper';
import Card from './card';

var dbLocation;
class Hand extends Component {

  componentDidMount() {
    dbLocation = database.ref('games/' + this.props.gameCode + '/players/' + this.props.playerName + '/hand');
    dbLocation.on('value', function(snapshot) {

      this.setState({
        hand: snapshot.val(),
      });
    }.bind(this));
  }

  constructor(props) {
    super(props);
    this.state = {
      hand: [],
    };
  }

  render() {

    return (
      <Paper>
        {this.state.hand.map(function(card) {
          return <Card value={card.stringvalue} suit={card.suit} />;
        })}
      </Paper>
    );
  }
}


function mapStateToProps(state) {
  return {
    gameCode: state.reducers.gameCode,
    playerName: state.reducers.playerName
  }
}

export default connect(mapStateToProps)(Hand);
