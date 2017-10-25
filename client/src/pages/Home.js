import React from 'react';
import Twittercont from '../components/Twittercont';
import Background from '../components/Background';

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