class Building {
  constructor(sqft) {
    this._sqft = Building.validateNumberType(sqft, 'Sqft');
    Building.checkForEvacuationMethodOverride();
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method to be overridden by subclasses
  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  // Validation method for number type
  static validateNumberType(value, attribute) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attribute} must be a valid number`);
    }
    return value;
  }

  // Check if evacuationWarningMessage is overridden
  static checkForEvacuationMethodOverride() {
    if (Building.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}

export default Building;
