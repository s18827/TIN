const fs = require('fs');

const dir = 'tmp';

fs.watch(dir, (eventType, filename) => {
  console.log('\t' + eventType + ' in file ' + filename + ': ');
  if (eventType == 'change') {
    fs.readFile(dir + '/' + filename, 'utf8', (err, data) => {
      console.log(data + '\n');
    });
  }
});
