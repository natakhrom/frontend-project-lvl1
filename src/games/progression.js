import { getArrayOfSize, randomItem } from '../index.js';

// скрытый элемент массива арифметической прогрессии
let hiddenItem;
// массив ответов, куда будем класть скрытые элементы
const answers = [];

// массив арифметической прогрессии
const arrNumPr = () => {
  const arr = getArrayOfSize(10);

  arr[0] = randomItem(20);
  const step = randomItem(5) + 1;
  for (let i = 1; i < arr.length; i += 1) {
    arr[i] = arr[i - 1] + step;
  }

  // случйное число в прогрессии заменяем на "..", а скрытый элемент кладем в массив ответов
  const randomInd = randomItem(10);
  hiddenItem = arr[randomInd];
  arr[randomInd] = '..';
  answers.push(String(hiddenItem));

  return arr.join(' ');
};

// массив вопросов
const questions = getArrayOfSize(3);
for (let i = 0; i < questions.length; i += 1) {
  questions[i] = arrNumPr();
}

export { questions, answers };
