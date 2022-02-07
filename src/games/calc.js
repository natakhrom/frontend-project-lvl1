import { startGame, questionsCount } from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

// калькулятор
function calc(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: '${operator}'!`);
  }
}

// раунд игры
const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calc(num1, num2, operator));

  return [question, answer];
};

// функция игры калькулятор
const playCalcGame = () => {
  const setRounds = [];

  for (let i = 0; i < questionsCount; i += 1) {
    setRounds.push(getQuestionAndAnswer());
  }

  startGame(setRounds, gameDescription);
};

export default playCalcGame;
