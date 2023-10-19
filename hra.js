import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
const playerElm = document.querySelector('.game-card__player');
const buttonsElm = document.querySelectorAll('button');

//fce obsahující přidání x/o, vytvoření pole, alert
const addCircleOrCross = async (e) => {
  e.target.disabled = true;
  //Přidání 'o'
  if (currentPlayer === 'circle') {
    (playerElm.src = `images/cross.svg`),
      (currentPlayer = 'cross'),
      e.target.classList.add('game-card__box--circle');
  } else {
    //Přidání 'x'
    (playerElm.src = `images/circle.svg`),
      (currentPlayer = 'circle'),
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
  } else if (winner === 'x') {
    alertAndRefresh('Vyhrál křížek 🥳!');
  } else if (winner === 'tie') {
    alertAndRefresh('Hra skončila nerozhodně😒!');
  } else if (currentPlayer === 'cross') {
    //napojení API hrající za X
    const response = await fetch(
      'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ board: gameField, player: 'x' }),
      },
    );
    const data = await response.json();
    const { x, y } = data.position;
    const field = buttonsElm[x + y * 10];
    field.click();
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
