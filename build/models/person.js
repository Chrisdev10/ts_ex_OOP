"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(info) {
        this._info = info;
    }
    get info() {
        return this._info;
    }
    walk() {
        console.log("I'm walking");
    }
    breath() {
        console.log("I'm breathing");
    }
    speak() {
        console.log("I'm speaking");
    }
    toString() {
        return `${this._info.lastName} ${this._info.firstName}`;
    }
}
exports.Person = Person;
