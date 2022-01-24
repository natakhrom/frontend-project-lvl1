#!/usr/bin/env node
/* eslint-disable import/no-named-as-default-member */

import { game, arrayLength, randomItem } from '../../src/index.js';
// eslint-disable-next-line import/no-named-as-default
import userName from '../brain-games.js';

const operators = ['+', '-', '*'];

// массив математических примеров
const arrElems = arrayLength(3);
for (let i = 0; i < arrElems.length; i += 1) {
  const a = randomItem(100);
  const b = randomItem(100);
  arrElems[i] = `${a} ${operators[randomItem(3)]} ${b}`;
}

// массив ответов
const answers = (array) => {
  const arr = [];
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
    arr.push(String(res));
  }

  return arr;
};

console.log('What is the result of the expression?');

const result = game(arrElems, answers(arrElems), userName);

if (result) {
  console.log(`Congratulations, ${userName}!`);
}
