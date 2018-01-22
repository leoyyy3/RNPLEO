import React, { Component } from 'react';
import {RaisedButton,AppBar,Paper,Menu,Divider,MenuItem} from 'material-ui';
import logo from './logo.svg';
import './App.css';

import Home from "./containers/Home"

class App extends Component {
    handleClick(){
        console.log('handles')
    }
  render() {
    return (
      <div className="App">
          <AppBar
              title={<span style={styles.title}>RNPLEO</span>}
              onTitleClick={this.handleClick}
            />
        <Home />
      </div>
    );
  }
}

const styles = {
    title:{
        color:'#fff'
    },
    paper:{
        position:"fixed",
        top:"64px",
        left:"0",
        bottom:"0"
    },
    item:{
        fontSize:"14px",
        height:"28px",
        lineHeight:"28px"
    },
    menu:{
        padding:"0 10px"
    }
}

export default App;
