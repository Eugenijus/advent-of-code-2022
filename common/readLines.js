const readline = require('readline');

async function readLines(stream) {
  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });
  return new Promise((resolve) => {
    stream.once('error', (_) => resolve(null));
    const lines = [];
    rl.on('line', (line) => lines.push(line));
    rl.on('close', (_) => resolve(lines));
  });
}

module.exports = { readLines };
