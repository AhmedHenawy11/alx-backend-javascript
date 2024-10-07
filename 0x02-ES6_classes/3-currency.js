/* eslint-disable no-console */

export default class Currency {
    constructor (code, name) {
        this._code = code;
        this._name = name;
    }

    // Code getter & setter
    set code (value) {
        this._code = value;
    }
    get code (){
        return this._code;
    }

    // Name getter & setter
    set code (value) {
        this._name = value;
    }
    get code (){
        return this._name;
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}
