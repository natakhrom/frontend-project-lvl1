import { game, randomItem } from '../index.js';

const gcdGame = () => {
  // массив вопросов
  const questions = [
    `${randomItem(100)} ${randomItem(100)}`,
    `${randomItem(100)} ${randomItem(100)}`,
    `${randomItem(100)} ${randomItem(100)}`];

  // функция нахождения наибольшего делителя двух чисел
  const greaterCommonDivisor = (a, b) => {
    if (b) {
      return greaterCommonDivisor(b, a % b);
    }
    return Math.abs(a);
  };

  // массив ответов
  const answers = (array) => {
    const arrAns = [];

    for (let i = 0; i < array.length; i += 1) {
      // преобразование элемента в массиве в массив
      const items = array[i].split(' ');
      const first = Number(items[0]);
      const last = Number(items[1]);
      arrAns.push(String(greaterCommonDivisor(first, last)));
    }

    return arrAns;
  };

  game(questions, answers(questions), 'Find the greatest common divisor of given numbers.');
};

export default gcdGame;
