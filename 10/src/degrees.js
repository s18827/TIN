// const init = function () {
//   document.getElementById('button-reset1').addEventListener('click', reset1);
//   document.getElementById('button-submit1').addEventListener('click', submit1);
// };
console.log('degrees.js load');

exports.reset1 = function (event) {
  event.preventDefault();
  console.log('reset1 load');
  document.getElementById('form-degrees').reset();
  document.getElementById('output-degrees').innerHTML = '';
};

exports.submit1 = function (event) {
  event.preventDefault();
  console.log('submit1 load');
};

// document.addEventListener('DOMContentLoaded', init);
