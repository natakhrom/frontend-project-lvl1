import { game, randomItem } from '../index.js';

const progressionGame = () => {
  // скрытый элемент массива арифметической прогрессии
  let hiddenItem;
  // массив ответов, куда будем класть скрытые элементы
  const answers = [];

  // массив арифметической прогрессии
  const arrNumPr = () => {
    const arr = [];
    const arrLength = 10;

    arr.push(randomItem(20));
    const step = randomItem(5) + 1;
    for (let i = 1; i < arrLength; i += 1) {
      arr.push(arr[i - 1] + step);
    }
    // случйное число в прогрессии заменяем на "..", а скрытый элемент кладем в массив ответов
    const randomInd = randomItem(10);
    hiddenItem = arr[randomInd];
    arr[randomInd] = '..';
    answers.push(String(hiddenItem));

    return arr.join(' ');
  };

  // массив вопросов
  const questions = [
    arrNumPr(),
    arrNumPr(),
    arrNumPr()];

  game(questions, answers, 'What number is missing in the progression?');
};

export default progressionGame;
