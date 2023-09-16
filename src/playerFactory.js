function createPlayer(id) {
  const missedMoves = [];

  function makeMove(gameboard) {
    let x, y;
    do {
      x = Math.floor(Math.random() * gameboard.length);
      y = Math.floor(Math.random() * gameboard.length);
    } while (missedMoves.some((move) => move.x === x && move.y === y));

    gameboard.receiveAttack(x, y);

    missedMoves.push({ x, y });

    return { x, y };
  }

  return {
    id,
    makeMove,
  };
}

module.exports = createPlayer;
