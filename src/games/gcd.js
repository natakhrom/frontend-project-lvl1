import { getArrayOfSize, randomItem } from '../index.js';

// массив вопросов
const questions = getArrayOfSize(3);
for (let i = 0; i < questions.length; i += 1) {
  const a = randomItem(100);
  const b = randomItem(100);
  questions[i] = `${a} ${b}`;
}

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

export { questions, answers };
