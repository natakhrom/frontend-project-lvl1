import { startGame, questionsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

// массив арфиметической прогрессии
const getProgressionArray = (step, firstElement) => {
  const arr = [];
  const arrLength = 10;

  arr[0] = firstElement;
  for (let i = 1; i < arrLength; i += 1) {
    arr[i] = arr[i - 1] + step;
  }

  return arr;
};

// раунд игры
const getQuestionAndAnswer = () => {
  const step = getRandomNumber(1, 5);
  const firstElement = getRandomNumber(1, 20);
  const arrayElement = getProgressionArray(step, firstElement);

  const randomIndex = getRandomNumber(0, 9);
  const temp = arrayElement[randomIndex];
  arrayElement[randomIndex] = '..';

  const question = arrayElement.join(' ');
  const answer = String(temp);

  return [question, answer];
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
