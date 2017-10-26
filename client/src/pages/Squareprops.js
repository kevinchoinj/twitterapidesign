import React from 'react';
import Twittercont from '../squareprops/Twittercont';
import Background from '../squareprops/Background';

export default class Square extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    return(
      <div>
        <Background/>
        <Twittercont/>
      </div>
    )
  }
}