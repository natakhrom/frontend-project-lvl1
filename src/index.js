import readlineSync from 'readline-sync';

// количество вопросов для каждой игры
const questionsCount = 3;

// игра
function startGame(roundsGame, gameDescription) {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  // задаем вопрос
  for (let i = 0; i < roundsGame.length; i += 1) {
    const [question, answer] = roundsGame[i];
    console.log(`Question: ${question}`);

    // получаем ответ от пользователя
    const userAnswer = readlineSync.question('Your answer: ');

    // сравниваем
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

export { startGame, questionsCount };
