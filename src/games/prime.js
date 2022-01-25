import { getArrayOfSize, randomItem } from '../index.js';

//  массив вопросов
const questions = getArrayOfSize(3);
for (let i = 0; i < questions.length; i += 1) {
  // кладем случайное число от 2 до 51
  questions[i] = randomItem(50) + 2;
}

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

export { questions, answers };
