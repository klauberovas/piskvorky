import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'cross';
const playerElm = document.querySelector('.game-card__player');
const buttonsElm = document.querySelectorAll('button');

//fce obsahující přidání x/o, vytvoření pole, alert
const addCircleOrCross = (e) => {
  e.target.disabled = true;
  //Podmínka přidávající x nebo o
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
  const winner = findWinner(gameField);
  const alertAndRefresh = (message) => {
    setTimeout(() => {
      alert(message);
      window.location.reload();
    }, 500);
  };
  if (winner === 'o') {
    alertAndRefresh('Vyhrálo kolečko 🥳!');
  }
  if (winner === 'x') {
    alertAndRefresh('Vyhrál křížek 🥳!');
  }
  if (winner === 'tie') {
    alertAndRefresh('Hra skončila nerozhodně😒!');
  }
};

//Posluchač na tlačítka
buttonsElm.forEach((button) => {
  button.addEventListener('click', addCircleOrCross);
});

//Alert při přerušení hry
document.getElementById('button-blue').addEventListener('click', (event) => {
  if (confirm('Opravdu chceš začít znovu?')) {
    return;
  }
  return event.preventDefault();
});
