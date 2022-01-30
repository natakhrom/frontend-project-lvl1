import { game, randomItem } from '../index.js';

const calcGame = () => {
  const operators = ['+', '-', '*'];

  // массив математических примеров
  const questions = [
    `${randomItem(50)} ${operators[randomItem(3)]} ${randomItem(50)}`,
    `${randomItem(50)} ${operators[randomItem(3)]} ${randomItem(50)}`,
    `${randomItem(50)} ${operators[randomItem(3)]} ${randomItem(50)}`];

  // массив ответов
  const answers = (array) => {
    const arrAnswers = [];
    let res;

    for (let i = 0; i < array.length; i += 1) {
      // преобразование элемента в массиве в массив
      const items = array[i].split(' ');
      const first = Number(items[0]);
      const last = Number(items[items.length - 1]);
      switch (items[1]) {
        case '+': res = first + last;
          break;
        case '-': res = first - last;
          break;
        default: res = first * last;
      }
      arrAnswers.push(String(res));
    }

    return arrAnswers;
  };

  game(questions, answers(questions), 'What is the result of the expression?');
};

export default calcGame;
