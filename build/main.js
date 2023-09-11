"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./models/personImpl/employee");
const data_1 = require("./data/data");
const house_1 = require("./models/housingImpl/house");
const apartment_1 = require("./models/housingImpl/apartment");
const unemployed_1 = require("./models/personImpl/unemployed");
/**
 * array of house
 */
const housingArray = [
    house_1.House.create(data_1.houseData[0]),
    apartment_1.Apartment.create(data_1.houseData[1]),
];
/**
 * Person objects
 */
const person1 = employee_1.Employee.create(data_1.data[0]);
const person2 = unemployed_1.UnEmployed.create(data_1.data[2]);
// add tenant to house
(_a = housingArray
    .find(house => house.houseCaract.owner.nationalRegister ===
    person1.info.nationalRegister)) === null || _a === void 0 ? void 0 : _a.tenantData.push(person1);
housingArray[1].tenantData.push(person2);
//test
console.log(housingArray[1].toString());
