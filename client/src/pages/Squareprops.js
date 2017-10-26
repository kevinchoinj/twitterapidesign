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
        <Twittercont  bgcolor="rgba(229,171,195,.8)" timebg="rgba(183,136,156,1)" textcolor="rgba(0,0,0,1)"/>
      </div>
    )
  }
}