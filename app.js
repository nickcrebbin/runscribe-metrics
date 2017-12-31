const username = 'nickcrebbin@gmail.com',
	password = 'Noxb8q$U6G8#4g',
	express = require('express'),
	auth = require('./auth.js'),
	app = express()

let id, token

app.listen(8080, function () {
	console.log('Example app listening on port 8080')
});

app.get('/', function (req, res) {
	authenticate();

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
