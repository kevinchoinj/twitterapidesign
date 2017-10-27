import React from 'react';
import bgimage from '../images/cherry.jpeg';

export default class Background extends React.Component{
  render(){
    const bg={
      height:"100vh",
      width:"100vw",
      position:"absolute",
      top:"0px",
      left:"0px",
      background: 'url('+bgimage+')',
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center top",
      backgroundSize: "cover",
    }
    return(
      <div style={bg}>

        </div>
    )
  }
}