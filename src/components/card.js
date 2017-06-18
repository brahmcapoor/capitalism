import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const paperStyle = {
  height: 245,
  width: 150,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
  margin: '20',
  backgroundColor: '#eee',
};



class Card extends Component {

  render() {
    return (
      <Paper style={paperStyle}>
        <h1> {this.props.value} </h1>
        <h3> {this.props.suit} </h3>
      </Paper>
    );
  }

}

export default Card;
