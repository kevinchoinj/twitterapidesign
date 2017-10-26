const express = require('express');
const path = require('path');

const app = express();
var Twitter = require('twitter');

try{
	var json = require('./config.json');
  var consumerkey= json.consumerkey;
  var consumersecret = json.consumersecret;
  var accesstoken = json.accesstoken;
  var accesssecret = json.accesssecret;
}
catch(err){
var consumerkey=process.env.REACT_APP_CON_KEY;
var consumersecret = process.env.REACT_APP_CON_SEC;
var accesstoken = process.env.REACT_APP_ACC_KEY;
var accesssecret = process.env.REACT_APP_ACC_SEC;
}

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
var client = new Twitter({
  consumer_key: consumerkey,
  consumer_secret: consumersecret,
  access_token_key: accesstoken,
  access_token_secret: accesssecret
 });
 var params = {screen_name: 'Omnidestiny', count:5};

app.get('/api/twitter', (req, res) => {
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
   if (!error) {
    const tweethold = Object.keys(tweets).map
      (function(k){return{key:k, value:tweets[k]}}
    )
    res.json(tweethold);
   }
   else{
     console.log(error);
   }
  });
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server started on ${port}`);






