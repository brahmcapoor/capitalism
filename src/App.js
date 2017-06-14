import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './reducers';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import logo from './images/logo.png';
import './styles/App.css';
import CapitalismSetup from './components/setupform';
import dealCards from './utils/cards';


export const store = createStore(app);

class Capitalism extends Component {
  render() {
    console.log(dealCards(5))
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div className="App">
          <br/>
            <img src={logo} className="App-logo"/>
            <div className="App-content">
              <CapitalismSetup />
            </div>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default Capitalism;
