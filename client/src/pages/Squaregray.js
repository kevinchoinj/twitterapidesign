import React from 'react';
import Twittercont from '../squaregray/Twittercont';
import Background from '../squaregray/Background';

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