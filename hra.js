import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'cross';
const playerElm = document.querySelector('.game-card__player');
const buttonsElm = document.querySelectorAll('button');

// fce přidávající x nebo o
const addCircleOrCross = (e) => {
  e.target.disabled = true;

  if (currentPlayer === 'cross') {
    (playerElm.src = `images/${currentPlayer}.svg`),
      (currentPlayer = 'circle'),
      e.target.classList.add('game-card__box--circle');
  } else if (currentPlayer === 'circle') {
    (playerElm.src = `images/${currentPlayer}.svg`),
      (currentPlayer = 'cross'),
      e.target.classList.add('game-card__box--cross');
  }
  //vytvoření nového pole po každém tahu
  const gameField = Array.from(buttonsElm).map((button) => {
    if (button.classList.contains('game-card__box--circle')) {
      return 'o';
    }
    if (button.classList.contains('game-card__box--cross')) {
      return 'x';
    }
    return '_';
  });
  //Alert na vyhlášení vítěze
  const vitez = findWinner(gameField);
  if (vitez === 'o') {
    alert(`Vyhrálo kolečko 🥳!`);
  } else if (vitez === 'x') {
    alert(`Vyhrál křížek 🥳!`);
  }
};

//Posluchač na tlačítka při hře
buttonsElm.forEach((button) => {
  button.addEventListener('click', addCircleOrCross);
});

//alert při přerušení hry
document.getElementById('button-blue').addEventListener('click', (event) => {
  const answer = confirm('Opravdu chceš začít znovu?');
  if (answer === false) {
    event.preventDefault();
  }
  return;
});
