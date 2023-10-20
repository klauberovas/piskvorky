import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
const playerElm = document.querySelector('.game-card__player');
const buttonsElm = document.querySelectorAll('button');

const addCircleOrCross = async (e) => {
  e.target.disabled = true;
  //Přidání 'o'
  if (currentPlayer === 'circle') {
    (playerElm.src = `images/cross.svg`),
      (currentPlayer = 'cross'),
      e.target.classList.add('game-card__box--circle');
  } else {
    //Přidání 'x' po zahrání AI
    (playerElm.src = `images/circle.svg`),
      (currentPlayer = 'circle'),
      e.target.classList.add('game-card__box--cross');
  }
  //Nové pole po tahu
  const gameField = newField();

  //Alert VYHLÁŠENÍ VÍTĚZE
  const winner = findWinner(gameField);
  if (winner === 'o') {
    alertAndRefresh('Vyhrálo kolečko 🥳!');
  } else if (winner === 'x') {
    alertAndRefresh('Vyhrál křížek 🥳!');
  } else if (winner === 'tie') {
    alertAndRefresh('Hra skončila nerozhodně😒!');
  } else if (currentPlayer === 'cross') {
    //Tah AI
    aiBotTurn(gameField);
  }
};

//-------------------POMOCNÉ FCE---------------------------
//POSLUCHAČ NA TLAČÍTKA
buttonsElm.forEach((button) => {
  button.addEventListener('click', addCircleOrCross);
});

//ALERT PRO PŘERUŠENÍ HRY
document.getElementById('button-blue').addEventListener('click', (event) => {
  if (confirm('Opravdu chceš začít znovu?')) {
    return;
  }
  return event.preventDefault();
});

//VYKRESLENÍ NOVÉHO POLE
const newField = () => {
  return Array.from(buttonsElm).map((button) => {
    if (button.classList.contains('game-card__box--circle')) {
      return 'o';
    }
    if (button.classList.contains('game-card__box--cross')) {
      return 'x';
    }
    return '_';
  });
};

//NAPOJENÍ AI HRAJÍCÍ ZA X
const aiBotTurn = async (array) => {
  const response = await fetch(
    'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ board: array, player: 'x' }),
    },
  );
  const data = await response.json();
  const { x, y } = data.position;
  const field = buttonsElm[x + y * 10];
  field.click();
};

// ČASOVAČ SE ZPRÁVOU, KDO VYHRÁL
const alertAndRefresh = (message) => {
  setTimeout(() => {
    alert(message);
    window.location.reload();
  }, 500);
};
