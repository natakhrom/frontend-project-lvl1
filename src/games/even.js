import { setGame, startGame } from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

// функция определения чётности числа
const isEven = (n) => n % 2 === 0;

// раунд игры
const getQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 100);

  const question = number;
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

// функция игры чётное ли число
const playEvenGame = () => {
  const game = setGame(getQuestionAndAnswer);

  startGame(gameDescription, game);
};

export default playEvenGame;
