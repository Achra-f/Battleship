const createBoard = require("../gameboardFactory"); // Adjust the path as needed

describe("createBoard", () => {
  it("should create a board with the specified length", () => {
    const length = 10;
    const board = createBoard(length);
    expect(board.board.length).toBe(length);
    expect(board.board[0].length).toBe(length);
  });

  it("should place a ship on the board", () => {
    const length = 10;
    const board = createBoard(length);
    const ship = { length: 3, hit: jest.fn(), isSunk: () => false };
    board.placeShips(ship, 2, 3, true);
    expect(board.board[2][3]).toBe(ship);
  });

  it("should throw an error when placing a ship out of bounds horizontally", () => {
    const length = 10;
    const board = createBoard(length);
    const ship = { length: 5, hit: jest.fn(), isSunk: () => false };
    expect(() => board.placeShips(ship, 9, 2, true)).toThrow(
      "Ship is out of bounds."
    );
  });

  it("should throw an error when placing a ship where another ship already exists", () => {
    const length = 10;
    const board = createBoard(length);
    const ship1 = { length: 3, hit: jest.fn(), isSunk: () => false };
    const ship2 = { length: 4, hit: jest.fn(), isSunk: () => false };
    board.placeShips(ship1, 2, 3, true);
    expect(() => board.placeShips(ship2, 2, 3, true)).toThrow(
      "There is already a ship at this location."
    );
  });

  it("should receive a missed attack and record it", () => {
    const length = 10;
    const board = createBoard(length);
    board.receiveAttack(7, 7);
    expect(board.missedAttacks).toContainEqual({ x: 7, y: 7 });
  });

  it("should receive a successful attack and mark the ship as hit", () => {
    const length = 10;
    const board = createBoard(length);
    const ship = { length: 3, hit: jest.fn(), isSunk: () => false };
    board.placeShips(ship, 2, 3, true);
    board.receiveAttack(2, 3);
    expect(ship.hit).toHaveBeenCalled();
  });

  it("should correctly report whether all ships are sunk", () => {
    const length = 10;
    const board = createBoard(length);
    const ship1 = { length: 2, hit: () => {}, isSunk: () => true };
    const ship2 = { length: 3, hit: () => {}, isSunk: () => false };
    board.placeShips(ship1, 1, 2, true);
    board.placeShips(ship2, 3, 4, false);

    expect(board.allShipSunk()).toBe(false);
    ship2.isSunk = () => true;
    expect(board.allShipSunk()).toBe(true);
  });
});
