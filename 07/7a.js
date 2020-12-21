// don't upload Node Modules folder to GitHub
// 'use strict;'
const http = require('http');
const url = require('url');
// const StringDecoder = require("string_decoder").StringDecoder;
// const util = require('util');
// const formidable = require('formidable');

let lol = 9;
function fun() {
    
}
const server = http.createServer(function(req, res) {
    
    // req.method.toLowerCase() // etc get post
    // console.log('req.url: ' + req.url);
    let path = url.parse(req.url, true);
    // console.log('path pathname: ' + path.pathname);


    // res.setHeader('Content-type','application/json');
    // res.setHeader('Access-Control-Allow-Origin',"*");
    // res.writeHead(200); // status code

    // let dataObj = {"id":123, "name": "Bob", "email": "bob@email.com"};
    // let data = JSON.stringify(dataObj);
    // res.end(data);
    // console.log(req.headers);

    res.setHeader("200", "OK", {'Content-Type': 'text/plain'});
    res.write("The response\n\n");
    res.write("path.pathname: " + path.pathname);
    res.end("\nEnd of message to browser");

});

const port = 1234;

server.listen(port, function() {
    console.log('Listening on port ' + port);
});