class Currency {
  constructor(code, name) {
    this._code = Currency.validateStringType(code, 'Code');
    this._name = Currency.validateStringType(name, 'Name');
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = Currency.validateStringType(newCode, 'Code');
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = Currency.validateStringType(newName, 'Name');
  }

  // Display full currency information
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Validation method for string type
  static validateStringType(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }
}

export default Currency;
