import React from 'react';

import Twittercont from '../components/Twittercont';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    return(
      <div>

        <Twittercont/>
      </div>
    )
  }
}