function game(number, answer, name) {
  const even = number % 2 === 0;

  if (even && answer === 'yes') {
    console.log('Correct!');
    return true;
  }
  if (!even && answer === 'no') {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${even ? 'yes' : 'no'}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
}

export default game;
