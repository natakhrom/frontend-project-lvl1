#!/usr/bin/env node
/* eslint-disable import/no-named-as-default-member */

import { game, arrayLength, randomItem } from '../../src/index.js';
// eslint-disable-next-line import/no-named-as-default
import userName from '../brain-games.js';

// скрытый элемент массива арифметической прогрессии
let hiddenItem;
// массив ответов, куда будем класть скрытые элементы
const answers = [];

// массив арифметической прогрессии
const arrNumPr = () => {
  const arr = arrayLength(10);

  arr[0] = randomItem(20);
  const step = randomItem(5) + 1;
  for (let i = 1; i < arr.length; i += 1) {
    arr[i] = arr[i - 1] + step;
  }

  // случйное число в прогрессии заменяем на ".."
  const randomInd = randomItem(5);
  hiddenItem = arr[randomInd];
  arr[randomInd] = '..';
  answers.push(String(hiddenItem));

  return arr.join(' ');
};

// массив вопросов
const numbers = arrayLength(3);
for (let i = 0; i < numbers.length; i += 1) {
  numbers[i] = arrNumPr();
}

console.log('What number is missing in the progression?');

const result = game(numbers, answers, userName);

if (result) {
  console.log(`Congratulations, ${userName}!`);
}
