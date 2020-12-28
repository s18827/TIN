const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.post('/', function (req, res, next) {
  let fname = req.body.fname;
  let lname = req.body.lname;
  let age = req.body.age;
  res.render('formdata', {
    title: 'Formdata',
    fname: fname,
    lname: lname,
    age: age,
  });
});

module.exports = router;
