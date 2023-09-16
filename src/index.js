import './style.css';
import createBoard from './gameboardFactory';
import createShip from './shipFactory';


const gameboard = createBoard(10);
const ship1 = createShip(1);

gameboard.placeShips(ship1, 2, 3, true);

gameboard.receiveAttack(2, 6); // Attack ship1

gameboard.receiveAttack(2, 4); // Attack ship1

console.log(gameboard.getMissedAttacks())

console.log(gameboard.allShipSunk()); // Output: true (if all ships are sunk)
