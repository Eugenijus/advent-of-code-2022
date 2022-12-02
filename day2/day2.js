const fs = require('fs');
const { readLines } = require('../common/readLines');

function getPointsForShape(shape2) {
  switch (shape2) {
    case 'X': //rock
      return 1;
    case 'Y': //paper
      return 2;
    case 'Z': //scissors
      return 3;
    default:
      return 0;
  }
}

function getPointsForOutcome(shape1, shape2) {
  const loss = 0;
  const draw = 3;
  const win = 6;
  switch (shape1) {
    case 'A': //rock
      if (shape2 == 'X') return draw; // rock and rock
      if (shape2 == 'Y') return win; // rock and paper
      if (shape2 == 'Z') return loss; // rock and scissors
    case 'B': //paper
      if (shape2 == 'X') return loss;
      if (shape2 == 'Y') return draw;
      if (shape2 == 'Z') return win;
    case 'C': //scissors
      if (shape2 == 'X') return win;
      if (shape2 == 'Y') return loss;
      if (shape2 == 'Z') return draw;
    default:
      return 0;
  }
}

async function countTotalScore() {
  const lines = await readLines(fs.createReadStream('input.txt'));
  let totalScore = 0;
  lines.forEach((line, index) => {
    const [player1, player2] = line.split(' ');
    const shapeScore = getPointsForShape(player2);
    const outcomeScore = getPointsForOutcome(player1, player2);
    // console.log(`${index + 1}:`, { shapeScore, outcomeScore });
    totalScore = totalScore + (shapeScore + outcomeScore);
  });
  console.log('answer 1:', totalScore);
}

countTotalScore();
