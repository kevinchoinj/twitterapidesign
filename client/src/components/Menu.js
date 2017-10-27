import React from 'react';
import {Link} from 'react-router-dom';

import {Col, Row} from 'react-bootstrap';
import Menupanel from './Menupanel';
import Menubtn from './Menubtn';

export default class Menu extends React.Component{
  constructor(props){
    super(props);
    this.state={
      offset:"-100%",
    }
    this.togglepanel = this.togglepanel.bind(this);
  }
  togglepanel(){
    if(this.state.offset ==="-100%"){
      this.setState({
        offset:"0px",
      })
    }
    else{
      this.setState({
        offset:"-100%",
      })
    }
  }
  render(){

    return(
      <div>
        <Menupanel offset={this.state.offset} toggler={this.togglepanel}/>
        <Menubtn toggler={this.togglepanel}/>
      </div>
    )
  }
}