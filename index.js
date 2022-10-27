const restify = require('restify');
const axios = require('axios');

const url = {
    base: 'https://api.github.com/repos',
    user: '/jibanezv',
    project: '/git-commit-history',
    commit: "/commits"
}

async function commits() {
    try {
        return await axios.get(url.base + url.user + url.project + url.commit);
    }
    catch (err) {
        console.log(err);
    }
}

async function getCommits(req, res, next) {
    let resp = await commits();
    res.send(resp.data);
    next();
}

let server = restify.createServer();

server.get('/commits/', getCommits);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
    console.log("To obtain commits data, must enter to http://localhost:8080/commits/")
});