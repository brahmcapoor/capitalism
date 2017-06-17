import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './reducers';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from './images/logo.png';
import './styles/App.css';


import CapitalismStartForm from './components/initialform';
import WaitingForPlayers from './components/waitingforplayers';


export const store = createStore(app);

class Capitalism extends Component {

  gameChangeHandler(status) {
    this.setState({gameStatus: status});
  }

  constructor(props) {
      super(props);
      this.state = {
        gameStatus:'setup',
      }
      this.gameChangeHandler = this.gameChangeHandler.bind(this);
  }

  render() {

    let content = null;
    if(this.state.gameStatus === 'setup'){
      content = <CapitalismStartForm handler={this.gameChangeHandler}/>;
    } else if (this.state.gameStatus === 'starting') {
      content = <WaitingForPlayers />
    }

    return (
      <Provider store={store}>
        <MuiThemeProvider>
       <div className="App">
          <br/>
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="App-content">
              {content}
            </div>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default Capitalism;
