#!/usr/bin/env node

/* eslint-disable import/no-named-as-default-member */

import { game, arrayQuestions, randomItem } from '../../src/index.js';
// eslint-disable-next-line import/no-named-as-default
import userName from '../brain-games.js';

// массив случайных цифр
const numbers = arrayQuestions(3);
for (let i = 0; i < numbers.length; i += 1) {
  numbers[i] = randomItem(100);
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

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const result = game(numbers, answers(numbers), userName);

if (result) {
  console.log(`Congratulations, ${userName}!`);
}
