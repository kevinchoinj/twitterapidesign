import React from 'react';
import {Link} from 'react-router-dom';

import {Col, Row} from 'react-bootstrap';

export default class Menubtn extends React.Component{
  render(){
    const btn={
      height:"50px",
      width:"50px",
      position:"absolute",
      top:"25px",
      left:"25px",
      backgroundColor:"#ff0000",
      color:"#000"
    }

    return(
      <div style={btn} onClick={this.props.toggler}>
      menu
      </div>
    )
  }
}