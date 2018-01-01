const axios = require('axios'),
	url = 'https://api.runscribe.com/v2/authenticate'

authenticate = async(username, password) => {
	return axios.post(url, {
		email: username,
		password: password
	});
}

module.exports = {
	authenticate: authenticate
}
