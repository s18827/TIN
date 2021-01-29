// const init = function () {
//   document.getElementById('button-reset2').addEventListener('click', reset2);
//   document.getElementById('button-submit2').addEventListener('click', submit2);
// };
console.log('distance.js load');

exports.reset2 = function (event) {
  event.preventDefault();
  console.log('reset2 load');
  document.getElementById('form-distance').reset();
  document.getElementById('output-distance').innerHTML = '';
};

exports.submit2 = function (event) {
  event.preventDefault();
  console.log('submit2 load');
};

// document.addEventListener('DOMContentLoaded', init);
