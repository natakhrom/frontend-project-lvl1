#!/usr/bin/env node
/* eslint-disable import/no-named-as-default-member */

import readlineSync from 'readline-sync';
import game from '../src/game.js';
// eslint-disable-next-line import/no-named-as-default
import userName from './brain-games.js';

const numbers = [15, 6, 7];
let allCorrect = true;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Question: ${numbers[i]}`);
  const answer = readlineSync.question('Your answer: ');
  if (!game(numbers[i], answer, userName)) {
    allCorrect = false;
    break;
  }
}

if (allCorrect) {
  console.log(`Congratulations, ${userName}!`);
}
