import { startGame, randomItem, questionsCount } from '../index.js';

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

// раунд игры
const getQuestionAndAnswer = () => {
  const round = [];
  const arrElement = getProgressionArray();
  const randomInd = randomItem(10);
  const temp = arrElement[randomInd];
  arrElement[randomInd] = '..';

  const question = arrElement.join(' ');
  round.push(question);
  const answer = `${temp}`;
  round.push(answer);

  return round;
};

// функция игры арифметичской прогрессии
const playProgressionGame = () => {
  const setRounds = [];

  for (let i = 0; i < questionsCount; i += 1) {
    setRounds.push(getQuestionAndAnswer());
  }

  startGame(setRounds, gameDescription);
};

export default playProgressionGame;
