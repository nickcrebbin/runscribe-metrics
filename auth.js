const url = 'https://api.runscribe.com/v2/authenticate';

authenticate = (username, password) => {
    return new Promise((resolve, reject) => {
        resolve('success');
    });
};

module.exports = {
    authenticate: authenticate
};