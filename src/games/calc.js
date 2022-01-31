import { startGame, randomItem } from '../index.js';

const gameDescription = 'What is the result of the expression?';

// калькулятор
function calc(a, b, operator) {
  let result;

  switch (operator) {
    case '+': result = a + b;
      break;
    case '-': result = a - b;
      break;
    default: result = a * b;
  }

  return result;
}

// функция игры калькулятор
const playCalcGame = () => {
  const operators = ['+', '-', '*'];
  const answers = [];
  const questions = [];
  const lengthOfExamples = 3;

  for (let i = 0; i < lengthOfExamples; i += 1) {
    const num1 = randomItem(50);
    const num2 = randomItem(50);
    const operator = operators[randomItem(3)];

    questions[i] = `${num1} ${operator} ${num2}`;
    answers[i] = `${calc(num1, num2, operator)}`;
  }

  startGame(questions, answers, gameDescription);
};

export default playCalcGame;
