import React from 'react';
import Twittercont from '../squarewhite/Twittercont';
import Background from '../squarewhite/Background';

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