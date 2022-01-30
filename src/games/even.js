import { game, randomItem } from '../index.js';

const evenGames = () => {
  // массив случайных цифр
  const questions = [
    randomItem(100),
    randomItem(100),
    randomItem(100)];

  // массив ответов
  const answers = (array) => {
    const arr = [];
    for (let i = 0; i < array.length; i += 1) {
      const correctAnswer = array[i] % 2 === 0 ? 'yes' : 'no';
      arr.push(correctAnswer);
    }
    return arr;
  };

  game(questions, answers(questions), 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default evenGames;
