import React from 'react';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    const bg={
      height:"100vh",
      width:"100vw",
      position:"absolute",
      backgroundColor:"#fff",
    }
    return(
      <div style={bg}>
        
      </div>
    )
  }
}