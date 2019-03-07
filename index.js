const http = require('http');
require('dotenv').config();
var BigNumber = require('bignumber.js');
var Web3 = require('web3')

var web3 = new Web3(new Web3.providers.HttpProvider(process.env.API_URL));

var balance = web3.eth.getBalance(process.env.ACCOUNT, function (error, result) {
    if (!error) {
        console.log("Wallet address:"+ process.env.ACCOUNT + " --> "+ web3.utils.fromWei(result, 'ether'));
    } else {
      console.error(error);
    }
  });

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Send back a response and end the connection
    //res.send(new Buffer('Hello World!\n'));
    var balance = web3.eth.getBalance(process.env.ACCOUNT, function (error, result) {
    if (!error) {
        res.end("Wallet address:"+ process.env.ACCOUNT + " --> "+ web3.utils.fromWei(result, 'ether'));
    } else {
      console.error(error);
    }
  });
});

// Start the server on port 3000
app.listen(3000, '0.0.0.0');
console.log('Node server running on port 3000');

