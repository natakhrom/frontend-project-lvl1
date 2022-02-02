import { startGame, randomItem, questionsCount } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

// функция определения чётности числа
function isEven(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}

// раунд игры
const getQuestionAndAnswer = () => {
  const round = [];
  const num = randomItem(100);

  const question = num;
  round.push(question);
  const answer = isEven(num);
  round.push(answer);

  return round;
};

// функция игры чётное ли число
const playEvenGame = () => {
  const setRounds = [];

  for (let i = 0; i < questionsCount; i += 1) {
    setRounds.push(getQuestionAndAnswer());
  }

  startGame(setRounds, gameDescription);
};

export default playEvenGame;
