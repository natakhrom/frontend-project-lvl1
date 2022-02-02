import readlineSync from 'readline-sync';

// случайное число
const randomItem = (n) => Math.floor(Math.random() * n);
// количество вопросов для каждой игры
const questionCount = 3;

// игра
function startGame(roundsGame, gameDescription) {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  // задаем вопрос
  for (let i = 0; i < roundsGame.length; i += 1) {
    console.log(`Question: ${roundsGame[i][0]}`);

    // получаем ответ от пользователя
    const userAnswer = readlineSync.question('Your answer: ');

    // сравниваем
    if (roundsGame[i][1] === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${roundsGame[i][1]}'.`);

      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

export { startGame, randomItem, questionCount };
