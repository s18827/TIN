// console.log('distance.js load');

exports.reset2 = (event) => {
  event.preventDefault();
  //   console.log('distane.js: reset2 load');
  document.getElementById('form-distance').reset();
  document.getElementById('output-distance').innerHTML = '';
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

var km = 'Kilometers';
var mi = 'Miles';

const convertDist = function (val, fromDist, toDist) {
  let convertedVal;
  switch (fromDist) {
    case km:
      if (toDist == mi) convertedVal = val * 0.6214;
      else convertedVal = val;
      break;
    case mi:
      if (toDist == km) convertedVal = val * 1.609344;
      else convertedVal = val;
      break;
    default:
      console.log(
        'something went wrong - no scale in distance convestion chosen'
      );
      break;
  }
  return convertedVal;
};

exports.submit2 = (event) => {
  event.preventDefault();
  //   console.log('distane.js: submit2 load');

  let val = document.getElementById('input-distance').value;
  if (validate.isNumberDec(val)) {
    val = parseFloat(val);
    let fromDist = getSelectedOption('select-fromDist');
    let toDist = getSelectedOption('select-toDist');
    let convertedVal = convertDist(val, fromDist, toDist);
    document.getElementById('output-distance').innerHTML = convertedVal;
  } else {
    alert('Enter numerical value in distance conversion');
  }
};
