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
        <Link to='/squaregold' style={linkstyle}>Squaregold</Link>
      </Col>
      <Col md={1}>
        <Link to='/tallgold' style={linkstyle}>Tallgold</Link>
      </Col>
      <Col md={1}>
        <Link to='/squaregray' style={linkstyle}>Squaregray</Link>
      </Col>
      <Col md={1}>
        <Link to='/squarewhite' style={linkstyle}>Squarewhite</Link>
      </Col>
      <Col md={1}>
        <Link to='/squareprops' style={linkstyle}>Squareprops</Link>
      </Col>
      </div>
    )
  }
}