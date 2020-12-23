const fs = require('fs');

const dir = 'tmp';

fs.watch(dir, (eventType, filename) => {
  console.log('\t' + eventType + ' in file ' + filename + ': ');
  if (eventType == 'change') {
    try {
      fs.readFile(dir + '/' + filename, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data + '\n');
      });
    } catch (err) {
      console.error(err);
    }
  }
});
