// don't upload Node Modules folder to GitHub
// 'use strict;'
const http = require('http');
const url = require('url');
const util = require('util');

const server = http.createServer(function (req, res) {
  let path = url.parse(req.url, true);
  let query = util.inspect(path.query);
  let operands = getParamsFromQueryStr(query, res);
  let result = resolveOperation(path.pathname, operands, res);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(
    operands[0] +
      ' ' +
      result[0] +
      ' ' +
      operands[1] +
      ' = ' +
      result[1] +
      '\n\n'
  );
});

const port = 8080;

server.listen(port, function () {
  console.log('Listening on port ' + port);
});

function getParamsFromQueryStr(queryStr, res) {
  let operands = [];
  let vars = queryStr.toLowerCase().split("'");
  for (let i = 0; i < vars.length; i++) {
    if (/^\d+$/.test(vars[i]) || /^\d+\.\d+$/.test(vars[i])) {
      // checking for numeric values only
      operands.push(parseInt(vars[i]));
    }
  }
  if (operands.length < 2) {
    error(res, 400, 'Enter 2 operands!');
  } else return operands;
}

function resolveOperation(strPathName, operands, res) {
  let oper = strPathName.toLowerCase();
  let x = operands[0];
  let y = operands[1];

  switch (oper) {
    case '/add':
      return ['+', add(x, y)];
    case '/sub':
      return ['-', sub(x, y)];
    case '/mul':
      return ['*', mul(x, y)];
    case '/div':
      return ['/', div(x, y, res)];
    default:
      error(
        res,
        404,
        'Incorrect operation signature (choose one from: add/sub/mul/div)'
      );
  }
}

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

const mul = function (x, y) {
  return x * y;
};

const div = function (x, y, res) {
  if (y == 0) error(res, 400, "You can't divide by 0!");
  return x / y;
};

function error(res, code, message) {
  res.writeHead(code, { 'Content-Type': 'text/plain' });
  res.end('Error: ' + message);
}
