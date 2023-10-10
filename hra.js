import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'cross';
const playerElm = document.querySelector('.game-card__player');

// const addCircleOrCross = (event) => {
//   event.target.disabled = true;

//   if (currentPlayer === 'cross') {
//     return (
//       (currentPlayer = 'circle'),
//       (playerElm.src = 'images/cross.svg'),
//       event.target.classList.add('game-card__box--circle')
//     );
//   }
//   return (
//     (currentPlayer = 'cross'),
//     (playerElm.src = 'images/circle.svg'),
//     event.target.classList.add('game-card__box--cross')
//   );
// };

const addCircleOrCross = (e) => {
  e.target.disabled = true;

  if (currentPlayer === 'cross') {
    return (
      (playerElm.src = `images/${currentPlayer}.svg`),
      (currentPlayer = 'circle'),
      e.target.classList.add('game-card__box--circle')
    );
  }
  return (
    (playerElm.src = `images/${currentPlayer}.svg`),
    (currentPlayer = 'cross'),
    e.target.classList.add('game-card__box--cross')
  );
};

const buttonsElm = document.querySelectorAll('button');
buttonsElm.forEach((button) => {
  button.addEventListener('click', addCircleOrCross);
});

document.getElementById('button-blue').addEventListener('click', (event) => {
  const answer = confirm('Opravdu chceš začít znovu?');
  if (answer === false) {
    event.preventDefault();
  }
  return;
});
