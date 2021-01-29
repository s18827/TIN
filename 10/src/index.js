const degrees = require('./degrees.js');

const distance = require('./distance.js');

import { degrees } from './degrees.js';
import { distance } from './distance.js';

const init = function () {
  document
    .getElementById('button-reset1')
    .addEventListener('click', degrees.reset1);
  document
    .getElementById('button-submit1')
    .addEventListener('click', degrees.submit1);

  document
    .getElementById('button-reset2')
    .addEventListener('click', distance.reset2);
  document
    .getElementById('button-submit2')
    .addEventListener('click', distance.submit2);
};

document.addEventListener('DOMContentLoaded', init);
