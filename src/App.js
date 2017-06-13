import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import logo from './images/logo.png';
import './styles/App.css';

import CapitalismHeader from './containers/header';
import dealCards from './utils/cards';

class App extends Component {
  render() {
    console.log(dealCards(4))
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <CapitalismHeader />
      </MuiThemeProvider>
    );
  }
}

export default App;
