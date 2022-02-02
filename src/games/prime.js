import { startGame, randomItem, questionsCount } from '../index.js';

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

// раунд игры
const getQuestionAndAnswer = () => {
  const round = [];
  const num = randomItem(50) + 2;

  const question = num;
  round.push(question);
  const answer = isPrime(num);
  round.push(answer);

  return round;
};

// функция игры простое число
const playPrimeGame = () => {
  const setRounds = [];

  for (let i = 0; i < questionsCount; i += 1) {
    setRounds.push(getQuestionAndAnswer());
  }

  startGame(setRounds, gameDescription);
};

export default playPrimeGame;
