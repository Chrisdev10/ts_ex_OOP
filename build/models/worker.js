"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Worker = void 0;
const person_1 = require("./person");
class Worker extends person_1.Person {
    constructor(info) {
        super(info);
        this.status = 'Contractual';
    }
    static create(info) {
        return new Worker(info);
    }
}
exports.Worker = Worker;
