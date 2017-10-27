import React from 'react';
import {Col} from 'react-bootstrap';

import Tweetobject from './Tweetobject';
import Twitterbutton from './Twitterbutton';

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

      offset:"0px",
    }
    this.toggletwitter = this.toggletwitter.bind(this)
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

  toggletwitter(){
    if (this.state.offset === "0px"){
      this.setState({
        offset:"-300px",
      })
    }
    else{
      this.setState({
        offset:"0px",
      })
    }
  }

  render(){
    const { twitt } = this.state;

    const twittercontainer={
      height:"100vh",
      top:"0px",
      width:"300px",
      right:this.state.offset,
      position:"fixed",
      bottom:"10vh",
      backgroundColor:"rgba(175,151,89,.8)",
      paddingTop:"100px",
      paddingBottom:"50px",
      overflow:"auto",
      minWidth:"250px",

      WebkitTransition: ".4s ease-out",
      MozTransition: ".4s ease-out",
      OTransition: ".4s ease-out",
      transition:".4s ease-out",
    }
    const tweet={
      marginBottom:"50px",
    }
    const twitterimage={
      width:"100%",
    }
    return(
      <div>
      <Twitterbutton toggler={this.toggletwitter} offset={this.state.offset}/>
      <div style={twittercontainer}>
      
        {twitt.length ? (
          <div onClick={this.twitteroutput}>
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

      </div>
      </div>
    )
  }
}