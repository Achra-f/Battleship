const createShip = require('./shipFactory');

function createBoard(length) {
  const board = new Array(length)
    .fill(null)
    .map(() => new Array(length).fill(null));

  const ships = [];

  const missedAttacks = [];

  function placeShips(ship, x, y, isHorizontal) {
    if (isHorizontal) {
      for (let i = 0; i < ship.length; i++) {
        if (x + i >= length) {
          throw new Error("Ship is out of bounds.");
        }
        if (board[x + i][y] !== null) {
          throw new Error("There is already a ship at this location.");
        }
        
        board[x + i][y] = ship;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (y + i >= length) {
          throw new Error("Ship placement out of bounds.");
        }
        if (board[x][y + i] !== null) {
          throw new Error("There is already a ship at this location.");
        }
        
        board[x][y + i] = ship;
      }
    }
    ships.push(ship);
  }
  
  
  

  function receiveAttack(x, y) {
    if (x < 0 || x >= length || y < 0 || y >= length) {
      throw new Error("Attack is out of bounds.");
    }
  
    if (board[x][y] == null) {
      console.log(`Missed attack at coordinates (${x}, ${y})`);
      missedAttacks.push({ x, y });
    } else {
      console.log(`Hit ship at coordinates (${x}, ${y})`);
      const ship = board[x][y];
      ship.hit();
    }
  }

  function allShipSunk() {
    return ships.every((ship) => ship.isSunk());
  }

  function getMissedAttacks() {
    return missedAttacks;
  }

  return {
    placeShips,
    receiveAttack,
    allShipSunk,
    getMissedAttacks
  };
}

module.exports = createBoard;

