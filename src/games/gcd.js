import { startGame, questionsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

// функция нахождения наибольшего делителя двух чисел
const greaterCommonDivisor = (a, b) => {
  if (b) {
    return greaterCommonDivisor(b, a % b);
  }
  return a;
};

// раунд игры
const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);

  const question = `${num1} ${num2}`;
  const answer = `${greaterCommonDivisor(num1, num2)}`;

  return [question, answer];
};

// функция игры наибольший общий делитель
const playGcdGame = () => {
  const setRounds = [];

  for (let i = 0; i < questionsCount; i += 1) {
    setRounds.push(getQuestionAndAnswer());
  }

  startGame(setRounds, gameDescription);
};

export default playGcdGame;
