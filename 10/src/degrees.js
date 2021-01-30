// console.log('degrees.js load');

exports.reset1 = (event) => {
  event.preventDefault();
  console.log('degrees.js: reset1 load');
  document.getElementById('form-degrees').reset();
  document.getElementById('output-degrees').innerHTML = '';
};

const validate = {
  isNumberDec: function (str) {
    const reg = /^\d*\.?\d*$/;
    return reg.test(str);
  },
};

const getSelectedOption = function (selectId) {
  let fromDeg = document.getElementById(selectId).value;
  return fromDeg;
};

var C = 'Celcius';
var F = 'Fahrenheit';
var K = 'Kelvin';

const convertTemp = function (val, fromDeg, toDeg) {
  let convertedVal;
  switch (fromDeg) {
    case C:
      if (toDeg == F) convertedVal = val * (9 / 5) + 32;
      else if (toDeg == K) convertedVal = val + 273.15;
      else convertedVal = val;
      break;
    case F:
      if (toDeg == C) convertedVal = (val - 32) * (5 / 9);
      else if (toDeg == K) convertedVal = (val - 32) * (5 / 9) + 273.15;
      else convertedVal = val;
      break;
    case K:
      if (toDeg == C) convertedVal = val - 273.15;
      else if (toDeg == F) convertedVal = (val - 273.15) * (9 / 5) + 32;
      else convertedVal = val;
      break;
    default:
      console.log(
        'something went wrong - no scales temperature convestion chosen'
      );
      break;
  }
  return convertedVal;
};

exports.submit1 = (event) => {
  event.preventDefault();
  //   console.log('degrees.js: submit1 load');

  let val = document.getElementById('input-degrees').value;
  //   console.log('initaial val = ' + val);
  if (validate.isNumberDec(val)) {
    val = parseFloat(val);
    let fromDeg = getSelectedOption('select-fromDeg');
    let toDeg = getSelectedOption('select-toDeg');
    // console.log('fromDeg = ' + fromDeg);
    // console.log('toDeg = ' + toDeg);
    let convertedVal = convertTemp(val, fromDeg, toDeg);
    // console.log('convertedVal = ' + convertedVal);
    document.getElementById('output-degrees').innerHTML = convertedVal;
  } else {
    alert('Enter numerical value in temperature conversion');
  }
};
