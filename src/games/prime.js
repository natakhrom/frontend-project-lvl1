import { setGame, startGame } from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// функция нахождения простого числа
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// раунд игры
const getQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 50);

  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

// функция игры простое число
const playPrimeGame = () => {
  const game = setGame(getQuestionAndAnswer);

  startGame(gameDescription, game);
};

export default playPrimeGame;
