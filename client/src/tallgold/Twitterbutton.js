import React from 'react';

import twittericon from '../images/twitter.png';

export default class Twitterbutton extends React.Component{
  render(){
    const bg={
      height:"35px",
      width:"35px",
      position:"absolute",
      top:"25px",
      right:"25px",
      cursor:"pointer",
      zIndex:"10",
    }

    const iconstyle={
      background: 'url('+twittericon+')',
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center top",
      backgroundSize: "cover",
      width:"100%",
      height:"100%",
    }

    const line1={
      top:"15px",
			height: "3px",
			width: "32px",
			position: "absolute",
			backgroundColor: "#000",
			WebkitTransform: "rotate(45deg)",
			MozTransform: "rotate(45deg)",
			OTransform: "rotate(45deg)",
			transform: "rotate(45deg)",
    }
    const line2={
      top:"15px",
			height: "3px",
			width: "32px",
			position: "absolute",
			backgroundColor: "#000",
			WebkitTransform: "rotate(-45deg)",
			MozTransform: "rotate(-45deg)",
			OTransform: "rotate(-45deg)",
			transform: "rotate(-45deg)",
    }
    return(
      <div style={bg} onClick={this.props.toggler}>
      {this.props.offset ==="0px"?
      <div>
        <span style={line1}></span>
        <span style={line2}></span>
      </div>
      :
      <div style={iconstyle}>
      </div>
      }

      </div>
    )
  }
}