#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUserName from '../src/sli.js';
import { game } from '../src/index.js';
import { questions, answers } from '../src/games/prime.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
getUserName(userName);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const result = game(questions, answers(questions), userName);
if (result) {
  console.log(`Congratulations, ${userName}!`);
}