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
        <Twittercont  bgcolor="rgba(255,224,213,.8)" timebg="rgba(183,136,156,1)" textcolor="rgba(255,255,255,1)" tweetcolor="rgba(255,181,182,1)"/>
      </div>
    )
  }
}