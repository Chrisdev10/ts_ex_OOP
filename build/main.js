"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./models/personImpl/employee");
const data_1 = require("./data/data");
const p1 = employee_1.Employee.create(data_1.data[0]);
