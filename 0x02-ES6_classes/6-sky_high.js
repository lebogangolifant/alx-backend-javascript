import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = SkyHighBuilding.validateNumberType(floors, 'Floors');
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }

  // Validation method for number type
  static validateNumberType(value, attribute) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attribute} must be a valid number`);
    }
    return value;
  }
}

export default SkyHighBuilding;
