import React from 'react';
import {Link} from 'react-router-dom';

import {Col, Row} from 'react-bootstrap';

export default class Menu extends React.Component{
  render(){
    const menubar={
      width:"100vw",
      height:"50px",
      backgroundColor:"rgba(0,0,0,.7)",
      position:"fixed",
      top:"0px",
      paddingTop:"10px",
    }
    const linkstyle={
      textDecoration:"none",
      color:"#fff",
      fontWeight:"bold",
    }
    return(
      <div style= {menubar}>
      <Col md={1} mdOffset={1}>
        <Link to='/' style={linkstyle}>Home</Link>
      </Col>
      <Col md={1}>
        <Link to='/square' style={linkstyle}>Squaregold</Link>
      </Col>
      <Col md={1}>
        <Link to='/tall' style={linkstyle}>Tallgold</Link>
      </Col>
      </div>
    )
  }
}