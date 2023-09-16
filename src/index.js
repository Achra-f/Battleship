const readline = require('readline');
const createBoard = require('./gameboardFactory');
const createShip = require('./shipFactory');
const createPlayer = require('./playerFactory');

const boardSize = 10;
const player1 = createPlayer(1);
const player2 = createPlayer(2);
const player1Gameboard = createBoard(boardSize);
const player2Gameboard = createBoard(boardSize);

const ship1 = createShip(3);
const ship2 = createShip(4);
player1Gameboard.placeShips(ship1, 2, 3, true);
player2Gameboard.placeShips(ship2, 5, 5, false);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function playerTurn(player, gameboard) {
  console.log(`Player ${player.id}'s turn:`);
  rl.question('Enter the coordinates (e.g., "x y"): ', (input) => {
    const [x, y] = input.split(' ').map(Number);

    if (gameboard.receiveAttack(x, y)) {
      console.log('Hit!');
    } else {
      console.log('Missed!');
    }

    if (gameboard.allShipSunk()) {
      console.log(`Player ${player.id} wins! Game over.`);
      rl.close();
    } else {
      playerTurn(player === player1 ? player2 : player1, player === player1 ? player2Gameboard : player1Gameboard);
    }
  });
}

playerTurn(player1, player2Gameboard);
