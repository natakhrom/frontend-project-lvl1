import readlineSync from 'readline-sync';

// игра
function game(questions, answers, rules) {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  // задаем вопрос
  for (let i = 0; i < questions.length; i += 1) {
    console.log(`Question: ${questions[i]}`);

    // получаем ответ от пользователя
    const userAnswer = readlineSync.question('Your answer: ');

    // сравниваем
    if (answers[i] === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answers[i]}'.`);

      console.log(`Let's try again, ${userName}!`);

      return false;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
}

// случайное число
const randomItem = (n) => Math.floor(Math.random() * n);

export { game, randomItem };
