export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clonedCar = new Car();
    Object.assign(clonedCar, this);
    Object.setPrototypeOf(clonedCar, this.constructor.prototype);
    return clonedCar;
  }
}
