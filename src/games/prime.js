import { game, randomItem } from '../index.js';

const primeGame = () => {
  //  массив вопросов
  const questions = [
    // кладем случайное число от 2 до 51
    `${randomItem(50) + 2}`,
    `${randomItem(50) + 2}`,
    `${randomItem(50) + 2}`];

  // функция нахождения простого числа
  const isPrime = (n) => {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  // массив ответов
  const answers = (array) => {
    const arrAnswers = [];

    for (let i = 0; i < array.length; i += 1) {
      if (isPrime(array[i])) {
        arrAnswers.push('yes');
      } else {
        arrAnswers.push('no');
      }
    }

    return arrAnswers;
  };

  game(questions, answers(questions), 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default primeGame;
