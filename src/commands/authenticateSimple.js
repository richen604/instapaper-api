const performRequest = require("./performRequest");

const perform = require('./performRequest.js')
const {username, password} = require('../../config.json')


const run = async () =>  {
    await perform.getData(`https://www.instapaper.com/api/authenticate?username=${username}&password=${password}`, {})
    .then(data => {
        console.log(data)
    });
}
run()