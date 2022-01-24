import readlineSync from 'readline-sync';

// игра
function game(questions, answers, name) {
  for (let i = 0; i < questions.length; i += 1) {
    console.log(`Question: ${questions[i]}`);

    // получаем ответ от пользователя
    const userAnswer = readlineSync.question('Your answer: ');

    // сравниваем
    if (answers[i] === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answers[i]}'.`);

      console.log(`Let's try again, ${name}!`);

      return false;
    }
  }
  return true;
}

// случайное число
const randomItem = (n) => Math.floor(Math.random() * n);

// длина массива
const arrayLength = (length) => {
  const array = [];
  array.length = length;

  return array;
};

export { game, arrayLength, randomItem };
