import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = Pricing.validateNumberType(amount, 'Amount');
    this._currency = Pricing.validateCurrencyType(currency, 'Currency');
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = Pricing.validateNumberType(newAmount, 'Amount');
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = Pricing.validateCurrencyType(newCurrency, 'Currency');
  }

  // Display full price information
  displayFullPrice() {
    const { _name, _code } = this._currency;
    return `${this._amount} ${_name} (${_code})`;
  }

  // Static method to validate number type
  static validateNumberType(value, attribute) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attribute} must be a valid number`);
    }
    return value;
  }

  // Static method to validate currency type
  static validateCurrencyType(value, attribute) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attribute} must be an instance of Currency`);
    }
    return value;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
