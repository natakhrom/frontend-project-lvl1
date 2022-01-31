import { startGame, randomItem } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

// функция нахождения наибольшего делителя двух чисел
const greaterCommonDivisor = (a, b) => {
  if (b) {
    return greaterCommonDivisor(b, a % b);
  }
  return Math.abs(a);
};

// функция игры наибольший общий делитель
const playGcdGame = () => {
  const questions = [];
  const answers = [];
  const lengthOfExamples = 3;

  for (let i = 0; i < lengthOfExamples; i += 1) {
    const num1 = randomItem(100);
    const num2 = randomItem(100);

    questions[i] = `${num1} ${num2}`;
    answers[i] = `${greaterCommonDivisor(num1, num2)}`;
  }

  startGame(questions, answers, gameDescription);
};

export default playGcdGame;
