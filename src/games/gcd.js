import { startGame, randomItem, questionsCount } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

// функция нахождения наибольшего делителя двух чисел
const greaterCommonDivisor = (a, b) => {
  if (b) {
    return greaterCommonDivisor(b, a % b);
  }
  return Math.abs(a);
};

// раунд игры
const getQuestionAndAnswer = () => {
  const round = [];
  const num1 = randomItem(50);
  const num2 = randomItem(50);

  const question = `${num1} ${num2}`;
  round.push(question);
  const answer = `${greaterCommonDivisor(num1, num2)}`;
  round.push(answer);

  return round;
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
