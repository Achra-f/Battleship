function createShip(length) {
  const ship = {
    length: length,
    timesHit: 0,
    isSunk: function () {
      return this.timesHit === this.length;
    },
    hit: function () {
      this.timesHit++;
    },
  };

  return ship;
}

module.exports = createShip;