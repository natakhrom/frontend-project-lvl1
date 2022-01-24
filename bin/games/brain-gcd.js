#!/usr/bin/env node
/* eslint-disable import/no-named-as-default-member */

// eslint-disable-next-line import/no-named-as-default
import userName from '../brain-games.js';
import { game, arrayLength, randomItem } from '../../src/index.js';

// массив вопросов
const numbers = arrayLength(3);
for (let i = 0; i < numbers.length; i += 1) {
  const a = randomItem(100);
  const b = randomItem(100);
  numbers[i] = `${a} ${b}`;
}

// функция нахождения наибольшего делителя двух чисед
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

console.log('Find the greatest common divisor of given numbers.');

const result = game(numbers, answers(numbers), userName);

if (result) {
  console.log(`Congratulations, ${userName}!`);
}
