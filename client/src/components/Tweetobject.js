import React from 'react';
import {Col, Row} from 'react-bootstrap';

export default class Tweetobject extends React.Component{

  render(){
    const tweet={
      marginBottom:"50px",
    }
    const twitterimage={
      width:"100%",
    }

    return(
      <div>
          <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1} style={tweet}>

          {
          this.props.twitt[this.props.number].value.extended_entities!==undefined?
          [
            (this.props.twitt[this.props.number].value.extended_entities.media[0]?
              <Col md={12} mdOffset={0} sm={12} smOffset={0} xs={12} xsOffset={0} key={this.props.number}>
              <img src={this.props.twitt[this.props.number].value.extended_entities.media[0].media_url} style={twitterimage}/>
              </Col>
            :
            <div>media but not image</div>
            ),]
          :
          <div></div>
          }

          {this.props.twitt[this.props.number].value.retweeted_status!== undefined?(
            <div>
            {this.props.twitt[this.props.number].value.retweeted_status.created_at.split(' ').slice(0, 3).join(' ')}
            <br/>
            {this.props.twitt[this.props.number].value.retweeted_status.created_at.split(' ').slice(3, 4).join(' ')}
            </div>)
            :
            (<div>
            {this.props.twitt[this.props.number].value.created_at.split(' ').slice(0, 3).join(' ')}
            <br/>
            {this.props.twitt[this.props.number].value.created_at.split(' ').slice(3, 4).join(' ')}
            </div>
            )
          }

          <br/>
          {this.props.twitt[this.props.number].value.text}

          </Col>
        </div>
    )
  }
}