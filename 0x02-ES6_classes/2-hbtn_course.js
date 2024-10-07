/* eslint-disable no-console */

export default class HolbertonCourse {
    // Constructing object values
    constructor(name, length, students) {
        typeof name === 'string' ? this._name = name : (() => { throw new TypeError('Name must be a string'); })();
        typeof name === 'number' ? this._length = length : (() => { throw new TypeError('Length must be a number'); })();
        Array.isArray(students) ? this._students = students : (() => { throw new TypeError('Students must be an array') })();
    }

    // Name getter and setter
    get name() {
        return this._name;
    }

    set name(val) {
        if (typeof val !== 'string') throw new TypeError('name must be a string');
        this._name = val;
    }

    // Length getter and setter
    get length() {
        return this._length;
    }

    set length(val) {
        if (!Number.isInteger(val)) throw new TypeError('length must be a number');
        this._length = val;
    }

    // Students getter and setter
    get students() {
        return this._students;
    }

    set students(val) {
        if (!Array.isArray(val)) throw new TypeError('students type must be an Array');
        this._students = val;
    }
}

