const
	express = require('express'),
	auth = require('./auth.js'),
	app = express(),
	urlRuns = 'https://api.runscribe.com/v2/runs';

let id, token, username, password, resultText;

app.listen(8080, function () {
	console.log('Runscribe app listening on port 8080')
});

app.get('/', function (request, response) {

	username = request.query.username;
	password = request.query.password;

	if (authenticate(response)) {
		getAccount();
	}
});

authenticate = async(response) => {
	let res
	try {
		res = await auth.authenticate(username, password)
		id = res.data.id
		token = res.data.token

		writeResult(response, 'Authenticated');
		console.log('authenticated ' + res)

		return true;

	} catch (e) {
		console.log(e)
		writeResult(response, e);
	}
	return false;
}

writeResult = (res, text) => {
	res.write('<html>');
	res.write('<head>');
	res.write('<title>Runscribe metrics</title>');
	res.write('</head>');
	res.write('<body>');
	res.write(text);
	res.write('</body>');
	res.end();
};

getAccount = async() => {
	return axios.get(url, {
		email: username,
		password: password
	});
}
