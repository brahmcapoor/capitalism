import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import logo from '../images/logo.png';



const CapitalismHeader = () => (
  <AppBar
    title="Capitalism"
    iconElementLeft={<img src={logo} className="App-logo"/>}
  />
)

export default CapitalismHeader
