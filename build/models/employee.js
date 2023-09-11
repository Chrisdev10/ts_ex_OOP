"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const person_1 = require("./person");
class Employee extends person_1.Person {
    constructor(info) {
        super(info);
        this.status = 'Contractual';
    }
    static create(info) {
        return new Employee(info);
    }
}
exports.Employee = Employee;
