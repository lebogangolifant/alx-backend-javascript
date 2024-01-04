class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse.validateStringType(name, 'Name');
    this._length = HolbertonCourse.validateNumberType(length, 'Length');
    this._students = HolbertonCourse.validateArrayStringType(students, 'Students');
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = HolbertonCourse.validateStringType(newName, 'Name');
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = HolbertonCourse.validateNumberType(newLength, 'Length');
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = HolbertonCourse.validateArrayStringType(newStudents, 'Students');
  }

  // Validation methods
  static validateStringType(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  static validateNumberType(value, attribute) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attribute} must be a valid number`);
    }
    return value;
  }

  static validateArrayStringType(value, attribute) {
    if (!Array.isArray(value) || value.some((item) => typeof item !== 'string')) {
      throw new TypeError(`${attribute} must be an array of strings`);
    }
    return value;
  }
}

export default HolbertonCourse;
