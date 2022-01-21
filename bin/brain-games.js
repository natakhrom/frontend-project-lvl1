#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUserName from '../src/sli.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

getUserName(userName);

export default userName;
