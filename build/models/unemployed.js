"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnEmployed = void 0;
const person_1 = require("./person");
class UnEmployed extends person_1.Person {
    constructor(info) {
        super(info);
        this.status = 'allocation';
    }
    static create(info) {
        return new UnEmployed(info);
    }
}
exports.UnEmployed = UnEmployed;
