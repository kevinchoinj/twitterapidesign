import React from 'react';
import Twittercont from '../squaregold/Twittercont';
import Background from '../squaregold/Background';

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