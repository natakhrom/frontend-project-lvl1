#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUserName from '../src/sli.js';
import { game } from '../src/index.js';
import { questions, answers } from '../src/games/calc.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
getUserName(userName);

console.log('What is the result of the expression?');

const result = game(questions, answers(questions), userName);
if (result) {
  console.log(`Congratulations, ${userName}!`);
}