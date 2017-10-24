import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      twitt: [
      {key:'0', value:{"text":"", "created_at":""}}, 
      {key:'1', value:{"text":"", "created_at":""}},
      {key:'2', value:{"text":"", "created_at":""}},
    ]
     }
  }

  componentDidMount() {
    this.twitteroutput();
  }

  twitteroutput = () => {
    fetch('/api/twitter')
      .then(res => res.json())
      .then(twitt => this.setState({ twitt }));
  }

  render() {

    const { twitt } = this.state;

    return (
      <div className="App">

{twitt.length ? (

 <div>
 {this.state.twitt["0"].value.created_at}
 <br/>
 {this.state.twitt["0"].value.text}
 <br/><br/>
 {this.state.twitt["1"].value.created_at}
 <br/>
 {this.state.twitt["1"].value.text}
 <br/>
 <br/>
 {this.state.twitt["2"].value.created_at}
 <br/>
 {this.state.twitt["2"].value.text}
 <br/><br/>
 <button
  className="more"
  onClick={this.twitteroutput}>
  Reload
</button>
</div>
)
:
(
<div>
<button
  onClick={this.twitteroutput}>
  Reload
</button>
</div>
)}

      </div>
    );
  }
}

export default App;
