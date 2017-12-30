const username = 'nickcrebbin@gmail.com',
password = 'Noxb8q$U6G8#4g';

var express = require('express');
var auth = require('./auth.js');

var app = express();
app.get('/', function (req, res) {
    authenticate();
   

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

authenticate = async () => {
    
    let res;
    try {
        res = await  auth.authenticate(username, password);
        console.log('authenticated '+ res);
      } catch(e) {
        console.log(e);
      }


};
