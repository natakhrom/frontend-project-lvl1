import { startGame, randomItem } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// функция нахождения простого числа
const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// функция игры простое число
const playPrimeGame = () => {
  const questions = [];
  const answers = [];
  const lengthOfExamples = 3;

  for (let i = 0; i < lengthOfExamples; i += 1) {
    const num = randomItem(50) + 2;

    questions[i] = num;
    answers[i] = isPrime(num);
  }

  startGame(questions, answers, gameDescription);
};

export default playPrimeGame;
