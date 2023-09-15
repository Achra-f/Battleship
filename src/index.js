import './style.css';
import './gameboardFactory';
import './shipFactory';
import createBoard from './gameboardFactory';
import createShip from './shipFactory';


const gameboard = createBoard(10);
const ship1 = createShip(3);
gameboard.placeShips(ship1, 2, 3, true);
gameboard.receiveAttack(2, 3); // Attack the ship
console.log(ship1.isSunk()); // Output: false
gameboard.receiveAttack(2, 4);
gameboard.receiveAttack(2, 5);

console.log(ship1.isSunk()); // Output: true
console.log(gameboard.allShipSunk()); // Output: false (if there are more ships)
