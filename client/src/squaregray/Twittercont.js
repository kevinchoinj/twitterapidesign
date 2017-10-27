import React from 'react';
import {Col} from 'react-bootstrap';

import Tweetobject from './Tweetobject';

export default class Twittercont extends React.Component{
  constructor(props){
    super(props);
    this.state={
      twitt: [
        {key:'0', value:{"text":"", "created_at":"", retweeted_status: {created_at:""}}, extended_entities:{media:[{media_url: ""}]}}, 
        {key:'1', value:{"text":"", "created_at":"", retweeted_status: {created_at:""}}, extended_entities:{media:[{media_url: ""}]}}, 
        {key:'2', value:{"text":"", "created_at":"", retweeted_status: {created_at:""}}, extended_entities:{media:[{media_url: ""}]}}, 
        {key:'3', value:{"text":"", "created_at":"", retweeted_status: {created_at:""}}, extended_entities:{media:[{media_url: ""}]}}, 
        {key:'4', value:{"text":"", "created_at":"", retweeted_status: {created_at:""}}, extended_entities:{media:[{media_url: ""}]}},
        {key:'5', value:{"text":"", "created_at":"", retweeted_status: {created_at:""}}, extended_entities:{media:[{media_url: ""}]}}, 
      ],

    }
  }

  componentDidMount() {
    this.twitteroutput();
  }

  twitteroutput = () => {
    fetch('/api/twitter')
      .then(res => res.json())
      .then(twitt => this.setState({ twitt }))
      .then(console.log(this.state.twitt));
  }

  render(){
    const { twitt } = this.state;

    const twittercontainer={
      height:"500px",
      position:"absolute",
      bottom:"50px",
      right:"50px",
      color:"#fff",
      overflow:"auto",
      backgroundColor:"rgba(0,0,0,.8)",

    }

    return(
      <div>
      <Col md={4} sm={6} xs={10} style={twittercontainer} className="scrollcustom2">
      
        {twitt.length ? (
          <div onClick={this.twitteroutput} >
            <Tweetobject twitt={this.state.twitt} number="0"/>
            <Tweetobject twitt={this.state.twitt} number="1"/>
            <Tweetobject twitt={this.state.twitt} number="2"/>
            <Tweetobject twitt={this.state.twitt} number="3"/>
            <Tweetobject twitt={this.state.twitt} number="4"/>
          </div>
          )
          :
          (
          <div>
          </div>
          )}

      </Col>
      </div>
    )
  }
}