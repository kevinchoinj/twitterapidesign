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
      paddingTop:"50px",
      paddingBottom:"50px",
      height:"500px",
      position:"absolute",
      bottom:"50px",
      right:"50px",
      overflow:"auto",
      backgroundColor:this.props.bgcolor,
      border:"2px solid "+this.props.tweetcolor,

    }
    const columnstyle={
      paddingLeft:"5px",
      paddingRight:"5px",
    }

    return(
      <div>
      <Col md={5} sm={10} xs={10} style={twittercontainer} className="scrollcustom4">
      
        {twitt.length ? (
          <Col md={10} mdOffset={1} >

          <Col md={6}  sm={6} style={columnstyle}>
          <Tweetobject twitt={this.state.twitt} number="0" timebg={this.props.timebg} textcolor={this.props.textcolor} tweetcolor={this.props.tweetcolor}/>
          <Tweetobject twitt={this.state.twitt} number="2" timebg={this.props.timebg} textcolor={this.props.textcolor} tweetcolor={this.props.tweetcolor}/>
          <Tweetobject twitt={this.state.twitt} number="4" timebg={this.props.timebg} textcolor={this.props.textcolor} tweetcolor={this.props.tweetcolor}/>
          </Col>
          <Col md={6}  sm={6} style={columnstyle}>
          <Tweetobject twitt={this.state.twitt} number="1" timebg={this.props.timebg} textcolor={this.props.textcolor} tweetcolor={this.props.tweetcolor}/>
          <Tweetobject twitt={this.state.twitt} number="3" timebg={this.props.timebg} textcolor={this.props.textcolor} tweetcolor={this.props.tweetcolor}/>
          <Tweetobject twitt={this.state.twitt} number="5" timebg={this.props.timebg} textcolor={this.props.textcolor} tweetcolor={this.props.tweetcolor}/>
          </Col>
 
          </Col>
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