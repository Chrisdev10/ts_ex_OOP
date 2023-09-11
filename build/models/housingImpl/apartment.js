"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartment = void 0;
const housing_1 = require("../housing");
class Apartment extends housing_1.Housing {
    constructor(settings) {
        super(settings);
    }
    static create(settings) {
        return new Apartment(settings);
    }
}
exports.Apartment = Apartment;
