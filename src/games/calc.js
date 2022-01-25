import { getArrayOfSize, randomItem } from '../index.js';

const operators = ['+', '-', '*'];

// массив математических примеров
const questions = getArrayOfSize(3);
for (let i = 0; i < questions.length; i += 1) {
  const a = randomItem(100);
  const b = randomItem(100);
  questions[i] = `${a} ${operators[randomItem(3)]} ${b}`;
}

// массив ответов
const answers = (arrAnswersay) => {
  const arrAnswers = [];
  let res;

  for (let i = 0; i < arrAnswersay.length; i += 1) {
    // преобразование элемента в массиве в массив
    const items = arrAnswersay[i].split(' ');
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

export { questions, answers };
