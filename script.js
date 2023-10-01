console.log('funguju');
let currentPlayer = 'circle';
const playerElm = document.querySelector('.game-card__player');

// currentPlayer.src = 'images/cross.svg';

const addCircleOrCross = (event) => {
  if (currentPlayer === 'circle') {
    return (
      (currentPlayer = 'cross'),
      event.target.classList.add('game-card__box--cross')
    );
  }
  return (
    (currentPlayer = 'circle'),
    event.target.classList.add('game-card__box--circle')
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
