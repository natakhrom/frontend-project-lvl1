import { startGame, randomItem, questionCount } from '../index.js';

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
  const round = [];
  const num1 = randomItem(50);
  const num2 = randomItem(50);
  const operator = operators[randomItem(3)];

  const question = `${num1} ${operator} ${num2}`;
  round.push(question);
  const answer = String(calc(num1, num2, operator));
  round.push(answer);

  return round;
};

// функция игры калькулятор
const playCalcGame = () => {
  const setRounds = [];

  for (let i = 0; i < questionCount; i += 1) {
    setRounds.push(getQuestionAndAnswer());
  }

  startGame(setRounds, gameDescription);
};

export default playCalcGame;
