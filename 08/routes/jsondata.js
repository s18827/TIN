const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

// curl -XPOST -d '{"fname": "Jan", "lname": "Kowalski", "age": "66"}' -H "Content-Type: application/json" http://localhost:3000/jsondata

router.post('/', function (req, res, next) {
  let fname = req.body.fname;
  let lname = req.body.lname;
  let age = req.body.age;
  res.render('jsondata', {
    title: 'Jsondata',
    fname: fname,
    lname: lname,
    age: age,
  });
});

module.exports = router;
