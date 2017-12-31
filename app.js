const
	express = require('express'),
	auth = require('./auth.js'),
  app = express(),
  urnRuns = 'https://api.runscribe.com/v2/runs';

let id, token, username, password;

app.listen(8080, function () {
	console.log('Example app listening on port 8080')
});

app.get('/', function (req, res) {
	//TODO get user and password from request
  authenticate();
  getAccount();

	res.write('<html>');
	res.write('<head>');
	res.write('<title>Runscribe metrics</title>');
	res.write('</head>');
	res.write('<body>');
	res.write('Authenticated');
  res.write('</body>');
  res.end();
});


var authenticate = async() => {
	let res
	try {
		res = await auth.authenticate(username, password)
		id = res.data.id
		token = res.data.token
		console.log('authenticated ' + res)
	} catch (e) {
		console.log(e)
	}
}

var getAccount = async() => {
	return axios.get(url, {
		email: username,
		password: password
	});
}
