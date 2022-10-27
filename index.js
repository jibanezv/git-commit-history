const restify = require('restify');
const axios = require('axios');


const url = {
    base: 'https://api.github.com/repos/jibanezv/git-commit-history',
    commit: "/commits"
}

async function commits() {
    try {
        return await axios.get('https://api.github.com/repos/jibanezv/git-commit-history/commits');
    }
    catch (err) {
        console.log(err);
    }
}

async function respond(req, res, next) {
    let resp = await commits();
    res.send(resp.data);
    next();
}

let server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);



server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});