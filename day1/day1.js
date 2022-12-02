const fs = require('fs');
const { readLines } = require('../common/readLines');

async function countMaxCalories() {
  const lines = await readLines(fs.createReadStream('input.txt'));
  let max1 = 0;
  let max2 = 0;
  let max3 = 0;
  let count = 0;
  lines.forEach((line) => {
    if (line === '') {
      count = 0;
    } else {
      count += new Number(line);
    }
    if (count > max1) {
      if (max2 > 0) {
        max3 = max2;
        max2 = max1;
      }
      max1 = count;
    } else if (count > max2) {
      max2 = count;
    } else if (count > max3) {
      max3 = count;
    }
  });
  console.log('max1: ', max1);
  console.log('max2: ', max2);
  console.log('max3: ', max3);
  const answer = max1 + max2 + max3;
  console.log('answer 1: ', max1);
  console.log('answer 2: ', answer);
}

countMaxCalories();
