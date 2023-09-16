function createShip(length) {
  const ship = {
    length: length,
    timesHit: 0,
    isSunk: function () {
      console.log(`Checking isSunk for ship with length ${this.length}.`);
      console.log(`timesHit: ${this.timesHit}`);
      return this.timesHit === this.length;
    },
    hit: function () {
      console.log(`Hitting ship with length ${this.length}.`);
      this.timesHit++;
    },
  };

  return ship;
}

module.exports = createShip;