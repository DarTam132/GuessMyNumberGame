'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Functia care reda mesajele in functie de situatie
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // Daca nu avem nici un numar de comparat
  if (!guess) {
    displayMessage('No number!');

    // Daca user-ul ghiceste numarul
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // Contorizarea scorului in functie de cate runde au trecut pana user-ul a ghicit numarul corect
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // Incrementarea scorului curent (scade cand user-ul nu ghiceste corect)
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
    // Ce ne afiseaza cand user-ul pierde
    else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Cand pierdem suntem nevoiti sa apasam pe butonul de de again ca sa inceapa un alt joc
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
