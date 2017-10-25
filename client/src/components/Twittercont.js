import React from 'react';
import {Col} from 'react-bootstrap';

export default class Twittercont extends React.Component{
  constructor(props){
    super(props);
    this.state={
      twitt: [
        {key:'0', value:{"text":"", "created_at":"", retweeted_status: {created_at:""}}}, 
        {key:'1', value:{"text":"", "created_at":"", retweeted_status: {created_at:"asdf"}}}, 
        {key:'2', value:{"text":"", "created_at":"", retweeted_status: {created_at:"asdf"}}}, 
      ]
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
      height:"100vh",
      top:"0px",
      position:"fixed",
      bottom:"10vh",
      backgroundColor:"#af9759",
      paddingTop:"50px",
      paddingBottom:"50px",
    }
    const tweet={
      marginBottom:"50px",
    }
    return(
      <Col md={2} mdOffset={10} sm={10} smOffset={1} xs={10} xsOffset={1} style={twittercontainer}>
        {twitt.length ? (

          <div onClick={this.twitteroutput}>
          <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1} style={tweet}>
          {this.state.twitt["0"].value.retweeted_status!== undefined?(
            <div>
            {this.state.twitt["0"].value.retweeted_status.created_at}
            </div>)
            :
            (<div>
            {this.state.twitt["0"].value.created_at}
            </div>
            )
          }
          <br/>
          {this.state.twitt["0"].value.text}
          </Col>
          <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1} style={tweet}>
          {this.state.twitt["1"].value.retweeted_status!==undefined ?(
            <div>
            {this.state.twitt["1"].value.retweeted_status.created_at}
            </div>)
            :
            (<div>
            {this.state.twitt["1"].value.created_at}
            </div>
            )
          }
          <br/>
          {this.state.twitt["1"].value.text}
          </Col>
          <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1} style={tweet}>
          {this.state.twitt["2"].value.retweeted_status!==undefined ?(
            <div>
            {this.state.twitt["2"].value.retweeted_status.created_at}
            </div>)
            :
            (<div>
            {this.state.twitt["2"].value.created_at}
            </div>
            )
          }
          <br/>
          {this.state.twitt["2"].value.text}
          </Col>
          </div>
          )
          :
          (
          <div>
          </div>
          )}

      </Col>
    )
  }
}