import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Menu from './components/Menu';

import Home from './pages/Home';
import Squaregold from './pages/Squaregold';
import Tallgold from './pages/Tallgold';
import Squarewhite from './pages/Squarewhite';
import Squaregray from './pages/Squaregray';
import Squareprops from './pages/Squareprops';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
    
     }
  }

  render() {


    return (
      <div className="App">
        
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} checkpage={this.pageishome}/>} />
        <Route exact path="/squaregold" render={(props) => <Squaregold {...props} checkpage={this.pageissquare}/>} />
        <Route exact path="/tallgold" render={(props) => <Tallgold {...props} checkpage={this.pageissquare}/>} />
        <Route exact path="/squaregray" render={(props) => <Squaregray {...props} checkpage={this.pageissquare}/>} />
        <Route exact path="/squarewhite" render={(props) => <Squarewhite {...props} checkpage={this.pageissquare}/>} />
        <Route exact path="/squareprops" render={(props) => <Squareprops {...props} checkpage={this.pageissquare}/>} />
      </Switch>

      <Menu/>
      </div>
    );
  }
}

export default App;
