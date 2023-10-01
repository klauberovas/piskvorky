console.log('funguju');
let currentPlayer = 'cross';
const playerElm = document.querySelector('.game-card__player');

// currentPlayer.src = 'images/cross.svg';

const addCircleOrCross = (event) => {
  event.target.disabled = true;

  if (currentPlayer === 'cross') {
    return (
      (currentPlayer = 'circle'),
      (playerElm.src = 'images/cross.svg'),
      event.target.classList.add('game-card__box--circle')
    );
  }
  return (
    (currentPlayer = 'cross'),
    (playerElm.src = 'images/circle.svg'),
    event.target.classList.add('game-card__box--cross')
  );
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', addCircleOrCross);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', addCircleOrCross);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', addCircleOrCross);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', addCircleOrCross);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', addCircleOrCross);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', addCircleOrCross);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', addCircleOrCross);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', addCircleOrCross);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', addCircleOrCross);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', addCircleOrCross);
