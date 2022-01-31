import { startGame, randomItem } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

// массив арфиметической прогрессии
const getProgressionArray = () => {
  const arr = [];
  const step = randomItem(5) + 1;
  const arrLength = 10;

  arr[0] = randomItem(20);
  for (let i = 1; i < arrLength; i += 1) {
    arr[i] = arr[i - 1] + step;
  }

  return arr;
};

// функция игры арифметичской прогрессии
const playProgressionGame = () => {
  const questions = [];
  const answers = [];
  const lengthOfExamples = 3;

  for (let i = 0; i < lengthOfExamples; i += 1) {
    const arrElement = getProgressionArray();
    const randomInd = randomItem(10);
    const temp = arrElement[randomInd];

    arrElement[randomInd] = '..';
    answers[i] = `${temp}`;
    questions[i] = arrElement.join(' ');
  }

  startGame(questions, answers, gameDescription);
};

export default playProgressionGame;
