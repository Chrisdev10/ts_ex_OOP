"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
const housing_1 = require("../housing");
class House extends housing_1.Housing {
    constructor(settings) {
        super(settings);
    }
    static create(settings) {
        return new House(settings);
    }
}
exports.House = House;
