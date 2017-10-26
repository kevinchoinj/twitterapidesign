import React from 'react';
import Twittercont from '../tallgold/Twittercont';
import Background from '../tallgold/Background';

export default class Home extends React.Component{
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