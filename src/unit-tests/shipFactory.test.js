const createShip = require("../shipFactory");

describe("createShip", () => {
  it("should create a ship with the specified length", () => {
    const ship = createShip(3);
    expect(ship.length).toBe(3);
  });

  it("should initialize timesHit to 0", () => {
    const ship = createShip(3);
    expect(ship.timesHit).toBe(0);
  });

  it("should return false for isSunk when the ship is not sunk", () => {
    const ship = createShip(3);
    expect(ship.isSunk()).toBe(false);
  });

  it("should return true for isSunk if the ship is sunk", () => {
    const ship = createShip(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  it("should increment timesHit when hit is called", () => {
    const ship = createShip(3);
    ship.hit();
    expect(ship.timesHit).toBe(1);
  });
});
