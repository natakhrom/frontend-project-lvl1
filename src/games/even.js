import { getArrayOfSize, randomItem } from '../index.js';

// массив случайных цифр
const questions = getArrayOfSize(3);
for (let i = 0; i < questions.length; i += 1) {
  questions[i] = randomItem(100);
}

// массив ответов
const answers = (array) => {
  const arr = [];
  for (let i = 0; i < array.length; i += 1) {
    const correctAnswer = array[i] % 2 === 0 ? 'yes' : 'no';
    arr.push(correctAnswer);
  }
  return arr;
};

export { questions, answers };
