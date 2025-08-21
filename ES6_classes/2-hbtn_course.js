function HolbertonCourse(name, length, students) {
  if (typeof name !== 'string') {
    throw new TypeError('name must be a string');
  }
  if (typeof length !== 'number') {
    throw new TypeError('length must be a number');
  }
  if (!Array.isArray(students) || !students.every(function (s) { return typeof s === 'string'; })) {
    throw new TypeError('students must be an array of strings');
  }

  this._name = name;
  this._length = length;
  this._students = students;
}

Object.defineProperty(HolbertonCourse.prototype, 'name', {
  get: function () {
    return this._name;
  },
  set: function (value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value;
  },
  enumerable: false,
  configurable: true,
});

Object.defineProperty(HolbertonCourse.prototype, 'length', {
  get: function () {
    return this._length;
  },
  set: function (value) {
    if (typeof value !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = value;
  },
  enumerable: false,
  configurable: true,
});

Object.defineProperty(HolbertonCourse.prototype, 'students', {
  get: function () {
    return this._students;
  },
  set: function (value) {
    if (!Array.isArray(value) || !value.every(function (s) { return typeof s === 'string'; })) {
      throw new TypeError('students must be an array of strings');
    }
    this._students = value;
  },
  enumerable: false,
  configurable: true,
});

export default HolbertonCourse;
