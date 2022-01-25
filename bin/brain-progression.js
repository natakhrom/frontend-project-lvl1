#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUserName from '../src/sli.js';
import { game } from '../src/index.js';
import { questions, answers } from '../src/games/progression.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
getUserName(userName);

console.log('What number is missing in the progression?');

const result = game(questions, answers, userName);

if (result) {
  console.log(`Congratulations, ${userName}!`);
}
