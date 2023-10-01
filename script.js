console.log('funguju');

// let currentPlayer = document.querySelector('.game-card__player');
// currentPlayer.src = 'images/cross.svg';

const addCircleOrCross = (event) => {
  let currentPlayer = 'circle';
  if (currentPlayer === 'circle') {
    event.target.classList.add('game-card__box--circle');
  } else if (currentPlayer === 'cross')
    return event.target.classList.add('game-card__box--cross');
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
