import React from "react";

export default class Menubtn extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
		

		}
	}


  render(){
		const navigate= {
			position:"fixed",
			mixBlendMode: "difference",
			zIndex: "100",
			top:"0px",
			left:"10px",
			width:"60px",
			height:"70px",
			cursor:"pointer",
			willChange: "opacity",
			transform: this.props.rotate,
			WebkitTransition: ".25s ease-out",
			MozTransition: ".25s ease-out",
			OTransition: ".25s ease-out",
			transition:".25s ease-out",
		}
		const menubutton={
			background: "transparent",
			color: "#fff",

		}
		const line1={
			height: "3px",
			width: "24px",
			position: "absolute",
			backgroundColor: this.props.buttoncolor,
			top:this.props.line1top,
			left: "18px",
			zIndex: "11",
			WebkitTransition: ".25s ease-out",
			MozTransition: ".25s ease-out",
			OTransition: ".25s ease-out",
			transition:".25s ease-out",
			WebkitTransform: this.props.line1rot,
			MozTransform: this.props.line1rot,
			OTransform: this.props.line1rot,
			transform: this.props.line1rot,
		}
		const line2={
			height: "3px",
			width: "24px",
			position: "absolute",
			backgroundColor: this.props.buttoncolor,
			top:this.props.line2top,
			left: "18px",
			zIndex: "11",
			WebkitTransition: ".25s ease-out",
			MozTransition: ".25s ease-out",
			OTransition: ".25s ease-out",
			transition:".25s ease-out",
			WebkitTransform: this.props.line2rot,
			MozTransform: this.props.line2rot,
			OTransform: this.props.line2rot,
			transform: this.props.line2rot,
		}
		const line3={
			height: "3px",
			width: this.props.line3rot,
			position: "absolute",
			backgroundColor: this.props.buttoncolor,
			top:"47px",
			left: this.props.l3left,
			zIndex: "11",
			WebkitTransition: ".25s ease-out",
			MozTransition: ".25s ease-out",
			OTransition: ".25s ease-out",
			transition:".25s ease-out",
		}

	  return(

				<div style={navigate} onClick={this.props.toggler} onMouseEnter={this.props.hoverbutton} onMouseLeave={this.props.leavebutton}>
					<div style={menubutton}>
					<span style={line1}></span>
					<span style={line2}></span>
					<span style={line3}></span>
					</div>
				</div>

	  );
  }
}
