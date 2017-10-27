import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Row} from 'react-bootstrap';

export default class Menupanel extends React.Component{
  render(){
    const menupanel={
      position:"absolute",
      height:"100vh",
      paddingTop:"100px",
      left:this.props.offset,
      backgroundColor:"#000",
      paddingLeft:"25px",
      WebkitTransition: ".4s ease-out",
      MozTransition: ".4s ease-out",
      OTransition: ".4s ease-out",
      transition:".4s ease-out",
    
    }
    const linkstyle={
      textDecoration:"none",
      color:"#fff",
      fontWeight:"bold",
    
    }
    return(
      <Col md={4} sm={12} xs={12} style= {menupanel}>
      <div>
        <Link to='/' style={linkstyle}>Home</Link>
      </div>
      <div>
        <Link to='/squaregold' style={linkstyle}>Squaregold</Link>
      </div>
      <div>
        <Link to='/tallgold' style={linkstyle}>Tallgold</Link>
      </div>
      <div>
        <Link to='/squaregray' style={linkstyle}>Squaregray</Link>
      </div>
      <div>
        <Link to='/squarewhite' style={linkstyle}>Squarewhite</Link>
      </div>
      <div>
        <Link to='/squareprops' style={linkstyle}>Squareprops</Link>
      </div>
      </Col>
    )
  }
}