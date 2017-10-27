import React from 'react';
import {Col, Row} from 'react-bootstrap';

export default class Tweetobject extends React.Component{

  render(){
    const tweet={
      fontFamily:"Montserrat, Helvetica",
      color:this.props.textcolor,
      paddingTop:"25px",
      textAlign:"center",
      background: this.props.tweetcolor,
      overflow: "hidden",
      verticalAlign:"top",

      WebkitTransition: ".4s ease-out",
      MozTransition: ".4s ease-out",
      OTransition: ".4s ease-out",
      transition:".4s ease-out",
      wordWrap:"break-word",
      position:"relative",
      display:"inline-block",
      float:"left",
    }
    const twitterimage={
      width:"100%",
      marginBottom:"25px",
    }
    const timebackground={
      backgroundColor:this.props.timebg,
      paddingTop:"25px",
      paddingBottom:"25px",
      marginTop:"25px",
      textAlign:"center",
    }

    return(
        <Col md={12} mdOffset={0} sm={12} smOffset={0} xs={12} xsOffset={0} style={tweet}>

        {/*media, posts image if image*/}
          {
          this.props.twitt[this.props.number].value.extended_entities!==undefined?
          [
            (this.props.twitt[this.props.number].value.extended_entities.media[0]?
              <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1} key={this.props.number}>
              <img src={this.props.twitt[this.props.number].value.extended_entities.media[0].media_url} style={twitterimage}/>
              </Col>
            :
            <div></div>
            ),]
          :
          <div></div>
          }

          {/*tweet text*/}
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={10} xsOffset={1}>
          {this.props.twitt[this.props.number].value.text}
          </Col>

          {/*tweeted time, checks if retweeted, if retweeted, rt time, if tweeted, tweet time*/}
          <Col md={12} mdOffset={0} sm={12} smOffset={0} xs={12} xsOffset={0} style={timebackground}>
           {this.props.twitt[this.props.number].value.retweeted_status!== undefined?(
            <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={10} xsOffset={1}>
            {this.props.twitt[this.props.number].value.retweeted_status.created_at.split(' ').slice(0, 3).join(' ')} - {this.props.twitt[this.props.number].value.retweeted_status.created_at.split(' ').slice(3, 4).join(' ')}
            </Col>)
            :
            (<Col md={8} mdOffset={2} sm={10} smOffset={1} xs={10} xsOffset={1}>
            {this.props.twitt[this.props.number].value.created_at.split(' ').slice(0, 3).join(' ')} - {this.props.twitt[this.props.number].value.created_at.split(' ').slice(3, 4).join(' ')}
            </Col>
            )
          }
          </Col>


          </Col>
    )
  }
}