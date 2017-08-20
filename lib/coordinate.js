class Coordinate {

  constructor (x, y){
    this.x = x;
    this.y = y;
  }

  distanceFrom(cordinate) {

    const xval = Math.pow((cordinate.x - this.x), 2);
    const yval = Math.pow((cordinate.y - this.y), 2);
    return Math.sqrt((xval+yval));

  }
}

module.exports = Coordinate
