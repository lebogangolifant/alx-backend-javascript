class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Casting to Number returns size
  valueOf() {
    return this.size;
  }

  toString() {
    return this.location;
  }
}

export default HolbertonClass;
