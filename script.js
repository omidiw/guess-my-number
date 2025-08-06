const numberIndicator = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const message = document.querySelector('.message');
const guessInput = document.querySelector('.guess');
let targetNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
guessInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    checkNumber();
  }
});
document.querySelector('.btn.check').addEventListener('click', checkNumber);
document.querySelector('.btn.again').addEventListener('click', playAgain);
function checkNumber() {
  const guess = Number(guessInput.value);
  if (!guess) {
    message.textContent = 'enter a number before hitting that ENTER!';
    return;
  }
  if (guess === targetNumber) {
    numberIndicator.style.width = '30rem';
    document.body.style.backgroundColor = '#60b347';
    message.textContent = 'YOU WON! 🥳';
    numberIndicator.textContent = guess;
    if (score > Number(highScore.textContent)) {
      highScore.textContent = score;
    }
    return;
  }
  score--;
  scoreElement.textContent = score;
  message.textContent = guess > targetNumber ? 'Too high! 📈' : 'Too low! 📉';
  if (score <= 0) {
    message.textContent = 'Game over! Try again.';
    scoreElement.textContent = 0;
    return;
  }
}

function playAgain() {
  score = 20;
  message.textContent = 'start guessing';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  numberIndicator.textContent = '?';
  targetNumber = Math.floor(Math.random() * 20) + 1;
  numberIndicator.style.width = '15rem';
}
