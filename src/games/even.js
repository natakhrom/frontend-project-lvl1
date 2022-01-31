import { startGame, randomItem } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

// функция определения чётности числа
function numberIsEven(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}

// функция игры чётное ли число
const playEvenGame = () => {
  const questions = [];
  const answers = [];
  const lengthOfExamples = 3;

  for (let i = 0; i < lengthOfExamples; i += 1) {
    const num = randomItem(100);

    questions[i] = num;
    answers[i] = numberIsEven(num);
  }

  startGame(questions, answers, gameDescription);
};

export default playEvenGame;
