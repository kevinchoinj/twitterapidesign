import React from 'react';
import {Link} from 'react-router-dom';


export default class Menupanel extends React.Component{
  render(){
    const menuwrapper={
      position:"absolute",
      height:"100vh",
      left:this.props.offset,
      backgroundColor:"#000",
      WebkitTransition: ".4s ease-out",
      MozTransition: ".4s ease-out",
      OTransition: ".4s ease-out",
      transition:".4s ease-out",
      width:"300px",
    }
    const menupanel={
      width:"100%",
      paddingTop:"100px",
      paddingLeft:"25px",
    }

    const linkstyle={
      textDecoration:"none",
      color:"#fff",
      fontWeight:"bold",
    
    }
    return(
      <div style={menuwrapper}>
      <div style= {menupanel}>
      <div>
      <Link to='/' style={linkstyle} onClick={this.props.toggler}>Home</Link>
    </div>
    <div>
      <Link to='/squaregold' style={linkstyle} onClick={this.props.toggler}>Squaregold</Link>
    </div>
    <div>
      <Link to='/tallgold' style={linkstyle} onClick={this.props.toggler}>Tallgold</Link>
    </div>
    <div>
      <Link to='/squaregray' style={linkstyle} onClick={this.props.toggler}>Squaregray</Link>
    </div>
    <div>
      <Link to='/squarewhite' style={linkstyle} onClick={this.props.toggler}>Squarewhite</Link>
    </div>
    <div>
      <Link to='/squareprops' style={linkstyle} onClick={this.props.toggler}>Squareprops</Link>
    </div>
      </div>
      </div>
    )
  }
}