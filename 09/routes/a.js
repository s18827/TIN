const express = require('express');
const router = express.Router();

router.post('/', function (req, res, next) {
  const param1 = req.body.param1;
  const param2 = req.body.param2;
  const oper = req.body.oper;

  const x = parseFloat(param1);
  const y = parseFloat(param2);
  let result = null;
  let resJSON = null;
  let errorExists = false;
  let errorMsg = null;
  switch (oper) {
    case 'add':
      result = x + y;
      break;
    case 'sub':
      result = x - y;
      break;
    case 'mul':
      result = x * y;
      break;
    case 'div':
      if (y == 0) {
        errorExists = true;
        errorMsg = "Error, you can't divide by 0";
      } else result = x / y;
      break;
    default:
      errorExists = true;
      console.log('operation = ' + oper);
      errorMsg =
        'Error, no proper operation specified (choose one from: add/sub/mul/div)';
  }
  if (errorExists) {
    resJSON = { response: errorMsg };
    errorExists = false;
  } else {
    resJSON = { response: result };
  }
  res.render('aView', { response: JSON.stringify(resJSON) });
});

module.exports = router;
